import {
  ChangeEventHandler,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import c from "./style.module.scss";
import { Loader, Editor } from "@/components";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { firestore, storage } from "@/firebase";
import uploadPost from "./uploadPost";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

interface Props {}

const CreatePost = (props: Props) => {
  const postRef = useRef<HTMLDivElement>(null);
  const [postData, setPostData] = useState({
    content: "",
    image: "",
    text: "",
    title: "",
  });
  const [previewMode, setPreviewMode] = useState(false);

  const [selectedFile, setSelectedFile] = useState<
    string | ArrayBuffer | null | undefined
  >("/assets/images/placeholder.webp");
  const [loading, setLoading] = useState(false);

  const addImageToPost: ChangeEventHandler = (e: any) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target?.result);
    };
  };

  async function savePostHandler(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    const docRef = await addDoc(collection(firestore, "posts"), {});
    let newPostData = { ...postData, id: docRef.id };

    if (selectedFile && typeof selectedFile == "string") {
      const imageRef = ref(storage, `${newPostData.id}/preview`);
      await uploadString(imageRef, selectedFile, "data_url").then(
        async () => (newPostData.image = await getDownloadURL(imageRef))
      );
    }

    try {
      await uploadPost(newPostData);
      window.location.href = "/blog";
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (previewMode && postRef.current) {
      postRef.current.innerHTML = postData.content;
    }
  }, [postData, previewMode]);

  return (
    <main className={c.main}>
      <section className={c.container}>
        <div className={c.postControls}>
          <button
            onClick={() => {
              setPreviewMode((prev) => !prev);
            }}
            className={c.editorHandler}
          >
            {previewMode ? "Редактировать" : "Предпросмотр"}
          </button>
        </div>

        {previewMode ? (
          <div ref={postRef} className={c.post}></div>
        ) : (
          <form onSubmit={savePostHandler}>
            <div className={c.inputsGroup}>
              <div>
                <p className={c.caption}>Заголовок</p>
                <input
                  required
                  value={postData.title}
                  onChange={(e) =>
                    setPostData({ ...postData, title: e.target.value })
                  }
                  type="text"
                  className={c.input}
                  placeholder="Заголовок"
                />
              </div>
              <div>
                <p className={c.caption}>Описание</p>
                <input
                  required
                  value={postData.text}
                  onChange={(e) =>
                    setPostData({ ...postData, text: e.target.value })
                  }
                  type="text"
                  className={c.input}
                  placeholder="Описание"
                />
              </div>
              <label className={c.fileInput}>
                <p className={c.caption}>Превью: (16x9)</p>
                {selectedFile && typeof selectedFile === "string" ? (
                  <img src={selectedFile} alt="Preview image" />
                ) : (
                  <img
                    src={"/assets/images/placeholder.webp"}
                    alt="Placeholder image"
                  />
                )}
                <input
                  required
                  accept="image/*"
                  type="file"
                  hidden
                  onChange={addImageToPost}
                />
              </label>
            </div>
            <Editor
              value={postData.content}
              setValue={(v) =>
                setPostData({ ...postData, content: v as string })
              }
            />

            <div>
              <button type="submit" className={c.saveButton} disabled={loading}>
                Сохранить
              </button>
            </div>
          </form>
        )}
      </section>
    </main>
  );
};

export default CreatePost;
