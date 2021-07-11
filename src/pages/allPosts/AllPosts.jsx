import styles from "./allPosts.module.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../features/posts/actions/getPosts";
import Loader from "react-loader-spinner";
import { loginRequired } from "../../hoc/loginRequired";
import Post from "../../components/post/Post";
import { toggleCreate } from "../../features/popup/popup";
import Pagination from "../../components/pagination/Pagination";
import CreatePost from "../../components/create/createPost";
import EditPost from "../../components/edit/EditPost";

function AllPosts() {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector(state => state.posts);
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(getPosts(page));
  }, [dispatch, page]);

  return (
    <>
      {/*Popup*/}
      <CreatePost />
      <EditPost />
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
            {!loading && posts.map(el => <Post key={el.id} {...el} />)}
            <button
              onClick={() => dispatch(toggleCreate())}
              className={styles.create_post}>
              create post
            </button>
            {!loading && !posts.length && "No posts"}
          </div>
          <Pagination page={page} len={posts.length} setPage={setPage} />
        </div>
      </div>
    </>
  );
}

export default loginRequired(AllPosts);
