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

function AllPosts() {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector(state => state.posts);
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const deletePostById = (e, id) => {
    e.preventDefault();
    dispatch(deletePost(id));
    // dispatch(getPostById(id));
  };

  const addPost = () => {
    const price = Number(prompt("price"));
    const title = prompt("title");
    const is_available = prompt("is available?");
    dispatch(createPost({ price: 100, title, is_available: false }));
  };

  return (
    <>
      {/*<div>*/}
      {/*  posts:*/}
      {/*  <div>*/}
      {/*    {loading ? (*/}
      {/*      <Loader type="ThreeDots" color="#00BFFF" height={15} width={15} />*/}
      {/*    ) : null}*/}
      {/*    {!loading &&*/}
      {/*      posts.map(el => {*/}
      {/*        return (*/}
      {/*          <div key={el.id}>*/}
      {/*            <hr />*/}
      {/*            <div>title: {el.title}</div>*/}
      {/*            <div>price: {el.price}</div>*/}
      {/*            <div>is_available: {el.is_available ? "Yes" : "No"}</div>*/}
      {/*            <button onClick={e => deletePostById(e, el.id)}>*/}
      {/*              delete*/}
      {/*            </button>*/}
      {/*          </div>*/}
      {/*        );*/}
      {/*      })}*/}
      {/*<button onClick={addPost}>create post</button>*/}
      {/*  </div>*/}
      {/*</div>*/}
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
