import PopupFormPost from "../popupFormPost/PopupFormPost";
import { createPost } from "../../features/posts/actions/createPost";
import { toggleAllOff } from "../../features/popup/popup";
import { useDispatch } from "react-redux";
import { checkInputData } from "../../helpers/dataValidation";
import { useCallback } from "react";

function CreatePost() {
  const dispatch = useDispatch();

  const onSubmitCallback = useCallback(
    data => {
      const checkedData = checkInputData(data);
      if (!isNaN(data.price)) {
        dispatch(createPost(checkedData));
        dispatch(toggleAllOff());
      }
    },
    [dispatch]
  );

  return (
    <PopupFormPost
      titleDef={""}
      priceDef={""}
      availableDef
      type={"create"}
      onSubmit={onSubmitCallback}
    />
  );
}

export default CreatePost;
