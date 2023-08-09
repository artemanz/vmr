import c from "./style.module.scss";
import { Link } from "react-router-dom";
import { PostPreview as PostPrviewType } from "@/data/posts";

type Props = {
  post: PostPrviewType;
};

const PostPreview = ({ post }: Props) => {
  return (
    <article className={c.post_article}>
      <Link className={c.post_container} to={`/blog/${post.id}`}>
        {post.image && (
          <img className={c.post_image} src={post.image} alt={post.title} />
        )}
        <div className={c.post_content}>
          <h3 className={c.post_title}>{post.title}</h3>
          <p className={c.post_text}>{post.text}</p>
        </div>
      </Link>
    </article>
  );
};

export default PostPreview;
