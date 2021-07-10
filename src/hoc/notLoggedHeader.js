import { NavLink } from "react-router-dom";
import styles from "../components/header/header.module.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export function notLoggedHeader(Component) {
  return function (props) {
    const authStatus = useSelector(state => state.auth).logged;
    if (authStatus) {
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
