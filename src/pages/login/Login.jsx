import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Loader from "react-loader-spinner";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { loginUser } from "../../features/login/actions/loginUserThunk";

function Login() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const { loading, error } = useSelector(state => state.login);
  const onSubmit = data => dispatch(loginUser(data));

  useEffect(() => {
    if (localStorage.token) {
      history.push("/");
    }
  }, [loading]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {error && "failed"}
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
      {loading ? (
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
