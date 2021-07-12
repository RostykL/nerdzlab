import Popup from "../popup/Popup";
import { useForm } from "react-hook-form";
import styles from "./createPostPopup.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from "lodash";
import { useEffect } from "react";
import { resetSelectedPost } from "../../features/posts/posts";
import SELECTOR from "../../features/selectors";

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
        <form
          onSubmit={handleSubmit(debounce(onSubmit, 200))}
          className={styles.form}>
          <div>
            <input
              className={styles.title}
              {...register("title", { required: true })}
              placeholder={"title"}
              defaultValue={title}
            />
          </div>
          <div>
            <input
              className={styles.price}
              type={"number"}
              {...register("price", { required: true, min: 1 })}
              placeholder={"price"}
              defaultValue={price}
            />
          </div>
          <label className={styles.available}>
            <input
              defaultChecked={is_available}
              type={"checkbox"}
              {...register("is_available")}
            />
            is it available?
          </label>
          <input type="submit" value={type} className={styles.create} />
        </form>
      </Popup>
    </>
  );
}

export default PopupFormPost;
