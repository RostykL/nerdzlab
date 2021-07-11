import Popup from "../popup/Popup";
import { useForm } from "react-hook-form";
import styles from "./createPostPopup.module.scss";
import { useSelector } from "react-redux";
import { debounce } from "lodash";

function PopupFormPost({ titleDef, priceDef, availableDef, onSubmit, type }) {
  const { register, handleSubmit } = useForm();
  const show = useSelector(state => state.popup)[type];

  return (
    <>
      <Popup show={show}>
        <form
          onSubmit={handleSubmit(debounce(onSubmit, 500))}
          className={styles.form}>
          <div>
            <input
              className={styles.title}
              {...register("title", { required: true })}
              placeholder={"title"}
              defaultValue={titleDef}
            />
          </div>
          <div>
            <input
              className={styles.price}
              type={"number"}
              {...register("price", { required: true })}
              placeholder={"price"}
              defaultValue={priceDef}
            />
          </div>
          <label className={styles.available}>
            <input
              defaultChecked={availableDef}
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
