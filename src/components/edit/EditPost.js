import PopupFormPost from "../popupFormPost/PopupFormPost";
import { useDispatch, useSelector } from "react-redux";

function EditPost() {
  const { title, price, is_available } = useSelector(
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
        console.log(data);
      }}
    />
  );
}

export default EditPost;
