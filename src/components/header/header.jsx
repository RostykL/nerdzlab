import { NavLink } from "react-router-dom";
import styles from "./css.module.scss";
import { notLoggedHeader } from "../../hoc/notLoggedHeader";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../../features/auth/auth";

function Header() {
  const dispatch = useDispatch();
  const authStatus = useSelector(state => state.auth).logged;
  if (authStatus) {
    return (
      <header className={styles.header}>
        <NavLink
          to={"/login"}
          onClick={() => {
            localStorage.removeItem("token");
            dispatch(setAuth(false));
          }}>
          logout
        </NavLink>
      </header>
    );
  }

  return (
    <header className={styles.header}>
      <NavLink to={"/login"}>login</NavLink>
      <NavLink to={"/signup"}>sign up</NavLink>
    </header>
  );
}

export default Header;
