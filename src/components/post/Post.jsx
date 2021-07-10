import styles from "./post.module.scss";
import { deletePost } from "../../features/posts/actions/deletePost";
import { useDispatch } from "react-redux";
import { useCallback } from "react";

function Post({ title, price, is_available, id }) {
  const dispatch = useDispatch();
  const deletePostById = useCallback(() => {
    dispatch(deletePost(id));
  }, [dispatch, id]);

  return (
    <div className={styles.post}>
      <div className={styles.post_info}>
        <span className={styles.title}>Title: {title} </span>
        <span>Price: {price} </span>
        <span>availability: {is_available ? "Yes" : "No"}</span>
      </div>
      <div className={styles.operation}>
        <button className={styles.del} onClick={deletePostById}>
          delete
        </button>
        <button className={styles.edit}>edit</button>
      </div>
    </div>
  );
}

export default Post;
