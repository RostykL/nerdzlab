import styles from "./allPosts.module.scss";
import { useEffect } from "react";
import { createPost } from "../../features/posts/actions/createPost";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../features/posts/actions/getPosts";
import Loader from "react-loader-spinner";
import { getPostById } from "../../features/posts/actions/getPostById";
import { loginRequired } from "../../hoc/loginRequired";
import { deletePost } from "../../features/posts/actions/deletePost";
import Post from "../../components/post/Post";
import { toggle } from "../../features/popup/popup";
import Popup from "../../components/popup/Popup";
import CreatePost from "../../components/popupCreatePost/createPost";

function AllPosts() {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector(state => state.posts);
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <button onClick={() => dispatch(toggle())} className={styles.create_post}>
        create post
      </button>

      <div className={styles.wrapper}>
        <div className={styles.posts}>
          <div className={styles.list}>
            <div className={styles.loading}>
              {loading ? (
                <Loader
                  type="ThreeDots"
                  color="#00BFFF"
                  height={30}
                  width={30}
                />
              ) : null}
            </div>
            {!loading &&
              posts.map(el => <Post key={el.id} {...el} id={el.id} />)}
            {!loading && !posts.length && "No posts"}
          </div>
          <ul className={styles.pagination_posts}>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default loginRequired(AllPosts);
