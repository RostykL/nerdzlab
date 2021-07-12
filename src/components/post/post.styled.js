import styled, { css } from "styled-components";

export const PostWrapper = styled.div`
  background-color: white;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);
  margin: 10px;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  width: 300px;
`;

export const PostInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  padding: 10px;
`;

const common = css`
  margin: 5px 10px;
`;

export const Title = styled.h2`
  ${common};
  color: rgba(0, 0, 0, 0.7);
  text-transform: capitalize;
`;

export const Price = styled.div`
  ${common};
  font-size: 13px;
`;

export const IsAvailable = styled.div`
  ${common};
  font-size: 13px;
  span {
    color: ${({ is_available }) => (is_available ? "lightgreen" : "coral")};
  }
`;

export const Operation = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
`;

const commonOperationButtons = css`
  padding: 0 15px;
  flex: 1;
  background-color: white;
  &:hover {
    transition: 0.3s;
    color: white;
    cursor: pointer;
  }
`;

export const Delete = styled.button`
  border-top-right-radius: 3px;
  ${commonOperationButtons};
  &:hover {
    color: indianred;
  }
`;

export const Edit = styled.button`
  border-bottom-right-radius: 3px;
  ${commonOperationButtons};
  &:hover {
    color: lightgreen;
  }
`;
