import PopupFormPost from "../popupFormPost/PopupFormPost";
import { createPost } from "../../features/posts/actions/createPost";
import { toggleAllOff } from "../../features/popup/popup";
import { useDispatch } from "react-redux";
import { checkInputData } from "../../helpers/dataValidation";
import { useCallback } from "react";

function CreatePost() {
  const dispatch = useDispatch();

  const onSubmitCallback = useCallback(
    inputData => {
      const data = checkInputData(inputData);
      if (!isNaN(data.price)) {
        dispatch(createPost(data));
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
