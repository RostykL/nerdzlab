import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../features/posts/actions/getPosts";
import { loginRequired } from "../../hoc/loginRequired";
import Post from "../../components/post/Post";
import { toggleCreate } from "../../features/popup/popup";
import Pagination from "../../components/pagination/Pagination";
import CreatePost from "../../components/create/createPost";
import EditPost from "../../components/edit/EditPost";
import SELECTOR from "../../features/selectors";
import { ControlPanel, Posts, PostsList, Wrapper } from "./allPosts.styled";
import Loader from "../../components/loader/Loader";
import { Button } from "../../styled/general.styled";

function AllPosts() {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector(SELECTOR.getPosts);
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(getPosts(page));
  }, [dispatch, page]);

  const openPopup = useCallback(() => dispatch(toggleCreate(), []));

  return (
    <>
      <CreatePost />
      <EditPost />

      <Wrapper>
        <Posts>
          <PostsList>
            {loading && <Loader height={40} width={40} />}
            {!loading && posts.map(el => <Post key={el.id} {...el} />)}
            {!loading && !posts.length && "No posts"}
          </PostsList>
        </Posts>
        <ControlPanel>
          <Pagination page={page} len={posts.length} setPage={setPage} />
          <Button onClick={openPopup}>create post</Button>
        </ControlPanel>
      </Wrapper>
    </>
  );
}

export default loginRequired(AllPosts);
