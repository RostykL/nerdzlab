import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: Arial, serif;
  ::-webkit-scrollbar {
       display: none;
   }
  }
  
  button, input {
      border: none;
  }
`;

export const buttonStyles = css`
  background-color: #41b3a3;
  padding: 10px 20px;
  cursor: pointer;
  margin: 5px;
  font-size: 1em;
  color: white;
  box-shadow: 0px 1px 4px -2px rgba(0, 0, 0, 0.75);
  border: 1px solid #41b3a3;
  border-radius: 3px;
  align-self: flex-start;

  &:hover {
    color: #41b3a3;
    border: 1px solid #41b3a3;
    background-color: white;
    transition: 0.3s;
  }
`;

export const FullScreenCenter = styled.div`
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  ${buttonStyles}
  &:disabled {
    background-color: #ff5252;
    border: none;
    color: white;
    cursor: not-allowed;
  }
`;

export const Static = styled.div`
  background-color: rgba(128, 128, 128, 0.5);
  padding: 10px 20px;
  margin: 5px;
  font-size: 1em;
  color: white;
  box-shadow: 0px 1px 4px -2px rgba(0, 0, 0, 0.75);
  border-radius: 3px;
  align-self: flex-start;
`;

export const Input = styled.input`
  border: none;
  margin: 5px;
  padding: 5px 5px 5px 0;
  text-indent: 10px;
  width: 300px;
  height: 40px;

  &:hover {
    outline: none;
  }
`;

// Login/Signup
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 10px;
`;
