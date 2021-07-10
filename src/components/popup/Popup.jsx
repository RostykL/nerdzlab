import styles from "./popup.module.scss";
import { useDispatch } from "react-redux";
import { toggleAllOff } from "../../features/popup/popup";

function Popup({ children, show }) {
  const dispatch = useDispatch();
  return (
    <div
      className={!show ? styles.hide : styles.overlay}
      onClick={() => {
        dispatch(toggleAllOff());
      }}>
      <div className={styles.popup} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default Popup;
