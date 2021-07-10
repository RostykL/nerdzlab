import PopupFormPost from "../popupFormPost/PopupFormPost";
import { createPost } from "../../features/posts/actions/createPost";
import { toggleAllOff } from "../../features/popup/popup";
import { useDispatch } from "react-redux";

function CreatePost() {
  const dispatch = useDispatch();
  return (
    <PopupFormPost
      type={"create"}
      onSubmit={data => {
        data = {
          ...data,
          price: Number(data.price),
          is_available: Boolean(data.is_available),
        };
        if (!isNaN(data.price)) {
          dispatch(createPost(data));
          dispatch(toggleAllOff());
        }
      }}
    />
  );
}

export default CreatePost;
