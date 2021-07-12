import { notLoggedHeader } from "../../hoc/notLoggedHeader";
import { useDispatch } from "react-redux";
import { setAuth } from "../../features/auth/auth";
import { GoTo, VerticalHeader } from "./header.styled";

function Header() {
  const dispatch = useDispatch();
  return (
    <VerticalHeader>
      <GoTo
        to={"/login"}
        onClick={() => {
          localStorage.removeItem("token");
          dispatch(setAuth(false));
        }}>
        logout
      </GoTo>
      <GoTo to={"/"}>Home</GoTo>
    </VerticalHeader>
  );
}

export default notLoggedHeader(Header);
