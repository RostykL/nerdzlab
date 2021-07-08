import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <NavLink
        to={"/login"}
        onClick={() => {
          localStorage.removeItem("token");
        }}>
        logout
      </NavLink>
    </header>
  );
}

export default Header;
