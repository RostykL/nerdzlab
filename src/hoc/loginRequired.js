import { NavLink } from "react-router-dom";

export function loginRequired(Component) {
  return function (props) {
    if (localStorage.token) {
      return <Component {...props} />;
    }
    return (
      <div>
        <div>You should be a member of this website to check this page</div>
        <NavLink to={"/login"}>login </NavLink>
        <NavLink to={"/signup"}>sign up</NavLink>
      </div>
    );
  };
}
