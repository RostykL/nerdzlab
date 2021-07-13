import React, { useCallback } from "react";
import {
  ButtonsWrapper,
  ResetButton,
  SubmitButton,
} from "./formButtons.styled";

function FormButtons({ buttonType, submitFunc, ...props }) {
  const submit = useCallback(submitFunc, [submitFunc]);

  return (
    <ButtonsWrapper {...props}>
      <ResetButton type="reset">Reset</ResetButton>
      <SubmitButton type="submit" onClick={submit}>
        {buttonType}
      </SubmitButton>
    </ButtonsWrapper>
  );
}

export default FormButtons;
