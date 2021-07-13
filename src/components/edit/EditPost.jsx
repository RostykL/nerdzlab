import { useDispatch, useSelector } from "react-redux";
import { checkInputData } from "../../helpers/dataValidation";
import { editPostById } from "../../features/posts/actions/editPost";
import { toggleAllOff } from "../../features/popup/popup";
import { useCallback, useEffect } from "react";

import SELECTOR from "../../features/selectors";
import { useForm } from "react-hook-form";
import { resetSelectedPost } from "../../features/posts/posts";
import Popup from "../popup/Popup";

import { debounce } from "lodash";
import FormButtons from "../FormButtons/FormButtons";
import usePostById from "../../hooks/usePostByid";
import {
  Form,
  PopupCheckboxLabel,
  PopupInput,
} from "../../styled/EditCreateForm.styled";

function EditPost() {
  const { id } = useSelector(SELECTOR.getSelectedPost);
  const { register, handleSubmit, reset } = useForm();
  const show = useSelector(SELECTOR.getPopup)["edit"];
  const { data, loaded, resetLoading, resetData } = usePostById(id);

  const dispatch = useDispatch();

  const onSubmit = useCallback(
    inputData => {
      const data = checkInputData(inputData);
      dispatch(editPostById({ id, data }));
      dispatch(toggleAllOff());
    },
    [dispatch, id]
  );

  useEffect(() => {
    if (!show) {
      reset();
      resetLoading(false);
      resetData({});
      dispatch(resetSelectedPost());
    }
  }, [show]);

  return (
    <>
      <Popup show={show}>
        {!loaded ? "Processing" : null}
        {loaded && (
          <Form onSubmit={handleSubmit(debounce(onSubmit, 200))}>
            <div>
              <PopupInput
                {...register("title", { required: true })}
                placeholder={"title"}
                defaultValue={data.title}
              />
            </div>
            <div>
              <PopupInput
                type={"number"}
                {...register("price", { required: true, min: 1 })}
                placeholder={"price"}
                defaultValue={data.price}
              />
            </div>
            <PopupCheckboxLabel>
              <input
                defaultChecked={data.is_available}
                type={"checkbox"}
                {...register("is_available")}
              />
              Is it available?
            </PopupCheckboxLabel>
            <FormButtons buttonType={"edit"} />
          </Form>
        )}
      </Popup>
    </>
  );
}

export default EditPost;
