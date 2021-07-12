import Popup from "../popup/Popup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from "lodash";
import { useEffect } from "react";
import { resetSelectedPost } from "../../features/posts/posts";
import SELECTOR from "../../features/selectors";
import { Form, PopupCheckboxLabel, PopupInput } from "./popupFormPost.styled";
import FormButtons from "../FormButtons/FormButtons";

function PopupFormPost({ onSubmit, type }) {
  const { register, handleSubmit, reset } = useForm();
  const show = useSelector(SELECTOR.getPopup)[type];
  const dispatch = useDispatch();
  const { title, price, is_available } = useSelector(
    SELECTOR.getPosts
  ).selectedPost;

  useEffect(() => {
    if (!show) {
      reset();
      dispatch(resetSelectedPost());
    }
  }, [show]);

  return (
    <>
      <Popup show={show}>
        <Form onSubmit={handleSubmit(debounce(onSubmit, 200))}>
          <div>
            <PopupInput
              {...register("title", { required: true })}
              placeholder={"title"}
              defaultValue={title}
            />
          </div>
          <div>
            <PopupInput
              type={"number"}
              {...register("price", { required: true, min: 1 })}
              placeholder={"price"}
              defaultValue={price}
            />
          </div>
          <PopupCheckboxLabel>
            <input
              defaultChecked={is_available}
              type={"checkbox"}
              {...register("is_available")}
            />
            Is it available?
          </PopupCheckboxLabel>
          <FormButtons buttonType={type} />
        </Form>
      </Popup>
    </>
  );
}

export default PopupFormPost;
