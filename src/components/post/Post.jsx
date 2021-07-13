import { deletePost } from "../../features/posts/actions/deletePost";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { getPostById } from "../../features/posts/posts";
import { toggleEdit } from "../../features/popup/popup";
import {
  Delete,
  Edit,
  IsAvailable,
  Operation,
  PostInfo,
  PostWrapper,
  Price,
  Title,
} from "./post.styled";

function Post({ title, price, is_available, id }) {
  const dispatch = useDispatch();
  const deletePostById = useCallback(() => {
    dispatch(deletePost(id));
  }, [dispatch, id]);

  const editPostById = useCallback(async () => {
    await dispatch(getPostById(id));
    dispatch(toggleEdit());
  }, [dispatch, id]);

  return (
    <PostWrapper>
      <PostInfo>
        <Title>{title}</Title>
        <Price>
          <span>Cost:</span>
          {price}
        </Price>
        <IsAvailable is_available={is_available}>
          <span>availability:</span> {is_available ? "YES" : "NO"}
        </IsAvailable>
      </PostInfo>
      <Operation>
        <Delete onClick={deletePostById}>Delete</Delete>
        <Edit onClick={editPostById}>Edit</Edit>
      </Operation>
    </PostWrapper>
  );
}

export default Post;
