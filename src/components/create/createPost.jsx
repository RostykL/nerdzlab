import PopupFormPost from "../popupFormPost/PopupFormPost";
import { createPost } from "../../features/posts/actions/createPost";
import { toggleAllOff } from "../../features/popup/popup";
import { useDispatch } from "react-redux";
import { checkInputData } from "../../helpers/dataValidation";

function CreatePost() {
  const dispatch = useDispatch();
  return (
    <PopupFormPost
      titleDef={""}
      priceDef={""}
      availableDef
      type={"create"}
      onSubmit={(data, e) => {
        data = checkInputData(data);
        if (!isNaN(data.price)) {
          dispatch(createPost(data));
          dispatch(toggleAllOff());
        }
      }}
    />
  );
}

export default CreatePost;
