import styles from "./post.module.scss";
import { deletePost } from "../../features/posts/actions/deletePost";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { getPostById } from "../../features/posts/posts";
import { toggle } from "../../features/popup/popup";

function Post({ title, price, is_available, id }) {
  const dispatch = useDispatch();
  const deletePostById = useCallback(() => {
    dispatch(deletePost(id));
  }, [dispatch, id]);

  const editPostById = useCallback(() => {
    dispatch(toggle());
    dispatch(getPostById(id));
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
        <button className={styles.edit} onClick={editPostById}>
          edit
        </button>
      </div>
    </div>
  );
}

export default Post;
