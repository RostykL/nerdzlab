import { useSelector } from "react-redux";
import SELECTOR from "../features/selectors";
import { GoTo, VerticalHeader } from "../components/header/header.styled";

export function notLoggedHeader(Component) {
  return function (props) {
    const authStatus = useSelector(SELECTOR.getAuth).logged;
    if (authStatus && localStorage.token) {
      return <Component {...props} />;
    }

    return (
      <VerticalHeader>
        <GoTo to={"/login"}>login</GoTo>
        <GoTo to={"/signup"}>sign up</GoTo>
      </VerticalHeader>
    );
  };
}
