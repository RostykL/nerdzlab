import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Posts = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const PostsList = styled.div`
  width: 100%;
  height: 600px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ControlPanel = styled.div`
  padding: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px dashed rgba(0, 0, 0, 0.5);
`;
