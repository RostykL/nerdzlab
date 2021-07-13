import { createPost } from "../../features/posts/actions/createPost";
import { toggleAllOff } from "../../features/popup/popup";
import { useDispatch, useSelector } from "react-redux";
import { checkInputData } from "../../helpers/dataValidation";
import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import SELECTOR from "../../features/selectors";
import { resetSelectedPost } from "../../features/posts/posts";
import Popup from "../popup/Popup";

import { debounce } from "lodash";
import FormButtons from "../FormButtons/FormButtons";
import {
  Form,
  PopupCheckboxLabel,
  PopupInput,
} from "../../styled/EditCreateForm.styled";

function CreatePost() {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const show = useSelector(SELECTOR.getPopup)["create"];

  const onSubmit = useCallback(
    inputData => {
      const data = checkInputData(inputData);
      if (!isNaN(data.price)) {
        dispatch(createPost(data));
        dispatch(toggleAllOff());
      }
    },
    [dispatch]
  );

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
            />
          </div>
          <div>
            <PopupInput
              type={"number"}
              {...register("price", { required: true, min: 1 })}
              placeholder={"price"}
            />
          </div>
          <PopupCheckboxLabel>
            <input type={"checkbox"} {...register("is_available")} />
            Is it available?
          </PopupCheckboxLabel>
          <FormButtons buttonType={"create"} />
        </Form>
      </Popup>
    </>
  );
}

export default CreatePost;
