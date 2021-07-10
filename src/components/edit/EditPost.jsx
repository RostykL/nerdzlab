import PopupFormPost from "../popupFormPost/PopupFormPost";
import { useDispatch, useSelector } from "react-redux";
import { checkInputData } from "../../helpers/dataValidation";
import { editPostById } from "../../features/posts/actions/editPost";

function EditPost() {
  const { title, price, is_available, id } = useSelector(
    state => state.posts
  ).selectedPost;
  const dispatch = useDispatch();
  return (
    <PopupFormPost
      titleDef={title}
      priceDef={price}
      availableDef={is_available}
      type={"edit"}
      onSubmit={data => {
        data = checkInputData(data);
        dispatch(editPostById({ id, data }));
      }}
    />
  );
}

export default EditPost;
