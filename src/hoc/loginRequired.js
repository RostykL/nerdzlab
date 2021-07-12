import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import SELECTOR from "../features/selectors";

export function loginRequired(Component) {
  return function (props) {
    const authStatus = useSelector(SELECTOR.getAuth).logged;

    if (authStatus && localStorage.token) {
      return <Component {...props} />;
    }
    return (
      <div>
        <div>You are not logged in!</div>
        <div>Login / Sign up to make this action</div>
        <NavLink to={"/login"}>login </NavLink>
        <NavLink to={"/signup"}>sign up</NavLink>
      </div>
    );
  };
}
