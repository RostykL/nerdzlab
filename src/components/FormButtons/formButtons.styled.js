import styled, { css } from "styled-components";

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;
`;

const commonButtonStyles = css`
  background-color: white;
  border: none;
  padding: 5px 10px;
  text-transform: lowercase;
  &:hover {
    cursor: pointer;
  }
`;

export const ResetButton = styled.button`
  ${commonButtonStyles};
  &:hover {
    color: coral;
  }
`;

export const SubmitButton = styled.button`
  ${commonButtonStyles};
  margin-left: 10px;
  &:hover {
    color: teal;
  }
`;
