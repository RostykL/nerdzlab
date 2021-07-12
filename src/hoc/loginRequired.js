import { useSelector } from "react-redux";
import SELECTOR from "../features/selectors";
import { GoTo } from "../components/header/header.styled";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  text-transform: capitalize;
  color: rgba(0, 0, 0, 0.5);
  text-align: center;
`;

export function loginRequired(Component) {
  return function (props) {
    const authStatus = useSelector(SELECTOR.getAuth).logged;

    if (authStatus && localStorage.token) {
      return <Component {...props} />;
    }
    return (
      <Wrapper>
        <Title>Login first to view the page!</Title>
        <GoTo to={"/login"}>login </GoTo>
        <GoTo to={"/signup"}>sign up</GoTo>
      </Wrapper>
    );
  };
}
