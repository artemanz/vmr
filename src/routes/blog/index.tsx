import React from "react";
import c from "./style.module.scss";
import {
  default as gettedPosts,
  PostPreview as PostPreviewType,
} from "@/data/posts";
import PostPreview from "./PostPreview";
import { Loader } from "@/components";
import { AuthProvider } from "@/firebase";
import { Link } from "react-router-dom";

type Props = {};

function createPost(post: any) {
  return (
    <li key={post.id} className={c.post}>
      <PostPreview post={post} />
    </li>
  );
}

const Blog = (props: Props) => {
  const { user } = React.useContext(AuthProvider);
  const [loading, setLoading] = React.useState(true);
  const [posts, setPosts] = React.useState<PostPreviewType[]>([]);

  React.useEffect(() => {
    const getPostsHandler = async () => {
      const posts = await gettedPosts;

      setPosts(posts);
      setLoading(false);
    };

    getPostsHandler();
  }, []);

  return (
    <main>
      <section className={c.container}>
        <div className={c.headerGroup}>
          <h1 className={c.title}>Блог</h1>
          {user && (
            <Link to={"/create-post"} className={c.addPostButton}>
              +
            </Link>
          )}
        </div>
        {loading ? (
          <Loader className={c.loader} />
        ) : (
          <ul className={c.postsGrid}>{posts.map(createPost)}</ul>
        )}
      </section>
    </main>
  );
};

export default Blog;
