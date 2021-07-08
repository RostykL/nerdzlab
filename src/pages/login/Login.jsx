import styles from "./login.module.scss";

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Loader from "react-loader-spinner";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { loginUser } from "../../features/slices/login/actions/loginUserThunk";
import { changeStatus } from "../../features/slices/login/login";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const { status } = useSelector(state => state.login);
  const onSubmit = data => dispatch(loginUser(data));

  useEffect(() => {
    if (status === "success" || localStorage.token) {
      history.push("/");
      dispatch(changeStatus());
    }
  }, [status]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {status === "failed" && "failed"}
      <div>
        <input
          type={"email"}
          required
          {...register("email", { required: true })}
          placeholder={"email"}
        />
      </div>
      <div>
        <input
          type={"password"}
          required
          {...register("password", { required: true })}
          placeholder={"password"}
          minLength={8}
        />
      </div>
      {status === "loading" ? (
        <Loader type="ThreeDots" color="#00BFFF" height={15} width={15} />
      ) : (
        <div>
          <input type="submit" value={"login"} />
        </div>
      )}
    </form>
  );
}

export default Login;
