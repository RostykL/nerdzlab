import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  left: 0;
  display: ${({ hide }) => (hide ? "none" : "block")};
`;

export const PopupWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0.5em;
  background-color: rgba(0, 128, 128, 0.6);
  backdrop-filter: blur(2px);
  border-radius: 3px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4);
`;
