import styles from "./signup.module.scss";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../../features/slices/signup/actions/signupUser";
import Loader from "react-loader-spinner";
import { useEffect } from "react";
import { changeStatus } from "../../features/slices/signup/signup";
import { useHistory } from "react-router-dom";

function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const { status } = useSelector(state => state.signup);
  const onSubmit = data => {
    dispatch(signupUser(data));
  };

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
          type={"name"}
          required
          {...register("name", { required: true })}
          placeholder={"name"}
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
      <div>
        <input
          type={"email"}
          required
          {...register("email", { required: true })}
          placeholder={"email"}
        />
      </div>
      {status === "loading" ? (
        <Loader type="ThreeDots" color="#00BFFF" height={15} width={15} />
      ) : (
        <div>
          <input type="signup" />
        </div>
      )}
    </form>
  );
}

export default Signup;
