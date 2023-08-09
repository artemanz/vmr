import c from "./style.module.scss";
import { AuthProvider, firestore, storage } from "@/firebase";
import { Editor, Loader, Modal } from "@/components";
import {
  ChangeEventHandler,
  FormEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import useData from "./useData";
import { useParams } from "react-router-dom";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import uploadPost from "./uploadPost";
import { v4 as uuidv4 } from "uuid";
import { deleteDoc, doc } from "firebase/firestore";

const Post = () => {
  const { postId } = useParams();
  const { user } = useContext(AuthProvider);

  const [previewMode, setPreviewMode] = useState(true);
  const [confirmDeleteModal, setConfirmDeleteModal] = useState(false);
  const postRef = useRef<HTMLDivElement>(null);

  const [saveLoading, setSaveLoading] = useState(false);
  const [saveButtonSpan, setSaveButtonSpan] = useState(false);

  const [selectedFile, setSelectedFile] = useState<
    string | ArrayBuffer | null | undefined
  >(null);

  const { loading, postData, setPostData } = useData(postId!);

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
    setSaveLoading(true);
    let newPostData = { ...postData };

    if (selectedFile && typeof selectedFile == "string") {
      const imageRef = ref(storage, `${postId}/preview`);
      await uploadString(imageRef, selectedFile, "data_url").then(
        async () => (newPostData.image = await getDownloadURL(imageRef))
      );
    }

    try {
      await uploadPost(newPostData);
      setSaveButtonSpan(true);
      setSaveLoading(false);
    } catch (error) {
      console.error(error);
    }

    setTimeout(() => setSaveButtonSpan(false), 3000);
  }

  useEffect(() => {
    if (postData && previewMode && postRef.current) {
      postRef.current.innerHTML = postData.content;
    }
  }, [postData, previewMode]);

  if (loading) {
    return (
      <main className={c.main}>
        <section className={c.container}>
          <Loader className={c.loader} />
        </section>
      </main>
    );
  }

  return (
    <main className={c.main}>
      <section className={c.container}>
        {user && (
          <div className={c.postControls}>
            <button
              onClick={() => {
                setPreviewMode((prev) => !prev);
              }}
              className={c.editorHandler}
            >
              {previewMode ? "Редактировать" : "Предпросмотр"}
            </button>
            <button
              onClick={() => setConfirmDeleteModal(true)}
              className={c.deleteButton}
            >
              Удалить
            </button>
          </div>
        )}
        {user && !previewMode ? (
          <form onSubmit={savePostHandler}>
            <div className={c.inputsGroup}>
              <div>
                <p className={c.caption}>Заголовок</p>
                <input
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
                    src={postData.image || "/assets/images/placeholder.webp"}
                    alt="Placeholder image"
                  />
                )}
                <input
                  accept="image/*"
                  type="file"
                  hidden
                  onChange={addImageToPost}
                />
              </label>
            </div>
            <Editor
              value={postData.content}
              setValue={(v) => setPostData({ ...postData, content: v })}
            />
            {user && (
              <div>
                <button
                  disabled={saveLoading}
                  type="submit"
                  className={c.saveButton}
                >
                  Сохранить
                </button>
                {saveButtonSpan && (
                  <span className={c.saveButtonSpan}>Сохранено!</span>
                )}
              </div>
            )}
          </form>
        ) : (
          <div ref={postRef} className={c.post}></div>
        )}
      </section>

      {confirmDeleteModal && (
        <Modal modal={confirmDeleteModal} setModal={setConfirmDeleteModal}>
          <p>Вы уверены что хотите удалить пост?</p>
          <div className={c.confirmationGroup}>
            <button
              onClick={async () => {
                setConfirmDeleteModal(false);
                await deleteDoc(doc(firestore, "posts", postId!));
                window.location.href = "/blog";
              }}
              className={c.confirmationButton}
            >
              Да
            </button>
            <button
              onClick={() => {
                setConfirmDeleteModal(false);
              }}
              className={c.confirmationButton}
            >
              Отмена
            </button>
          </div>
        </Modal>
      )}
    </main>
  );
};

export default Post;
