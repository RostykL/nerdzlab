import { useDispatch } from "react-redux";
import { toggleAllOff } from "../../features/popup/popup";
import { Overlay, PopupWindow } from "./popup.styled";

function Popup({ children, show }) {
  const dispatch = useDispatch();
  return (
    <Overlay
      hide={!show}
      onClick={() => {
        dispatch(toggleAllOff());
      }}>
      <PopupWindow onClick={e => e.stopPropagation()}>{children}</PopupWindow>
    </Overlay>
  );
}

export default Popup;
