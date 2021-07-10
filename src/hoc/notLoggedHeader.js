import { NavLink } from "react-router-dom";
import styles from "../components/header/css.module.scss";
import { useEffect, useState } from "react";

export function notLoggedHeader(Component) {
  return function (props) {
    const [logged, setLogged] = useState(false);
    if (localStorage.token) {
      return <Component {...props} />;
    }

    return (
      <header className={styles.header}>
        <NavLink to={"/login"}>login</NavLink>
        <NavLink to={"/signup"}>sign up</NavLink>
      </header>
    );
  };
}
