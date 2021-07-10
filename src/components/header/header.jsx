import { NavLink } from "react-router-dom";
import styles from "./header.module.scss";
import { notLoggedHeader } from "../../hoc/notLoggedHeader";
import { useDispatch } from "react-redux";
import { setAuth } from "../../features/auth/auth";

function Header() {
  const dispatch = useDispatch();
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

export default notLoggedHeader(Header);
