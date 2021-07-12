import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { buttonStyles } from "../../styled/general.styled";

export const VerticalHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 50px;
`;

export const GoTo = styled(NavLink)`
  ${buttonStyles};
  width: 100%;
  text-align: center;
  text-decoration: none;
`;
