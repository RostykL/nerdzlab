import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  color: white;
  min-width: 500px;
  text-align: center;
`;

export const PopupInput = styled.input`
  width: 100%;
  padding: 10px 10px 10px 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
  text-indent: 10px;
  margin: 5px 0;
`;

export const PopupCheckboxLabel = styled.label`
  align-self: flex-start;
  input {
    margin-right: 5px;
  }
`;

export const CreateButton = styled.button`
  color: black;
  background-color: lightgreen;
  margin: 5px;
  height: 40px;
  padding: 0 10px;
`;
