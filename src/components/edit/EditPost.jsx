import PopupFormPost from "../popupFormPost/PopupFormPost";
import { useDispatch, useSelector } from "react-redux";
import { checkInputData } from "../../helpers/dataValidation";
import { editPostById } from "../../features/posts/actions/editPost";
import { toggleAllOff } from "../../features/popup/popup";
import { useCallback } from "react";

import SELECTOR from "../../features/selectors";

function EditPost() {
  const { title, price, is_available, id } = useSelector(
    SELECTOR.getPosts
  ).selectedPost;

  const dispatch = useDispatch();
  const onSubmitCallback = useCallback(
    inputData => {
      const data = checkInputData(inputData);
      dispatch(editPostById({ id, data }));
      dispatch(toggleAllOff());
    },
    [dispatch, id]
  );

  return (
    <PopupFormPost
      titleDef={title}
      priceDef={price}
      availableDef={is_available}
      type={"edit"}
      onSubmit={onSubmitCallback}
    />
  );
}

export default EditPost;
