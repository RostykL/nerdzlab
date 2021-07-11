import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../../features/signup/actions/signupUser";
import Loader from "react-loader-spinner";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

function Signup() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const { loading, error } = useSelector(state => state.signup);
  const { logged } = useSelector(state => state.auth);

  const onSubmit = data => {
    dispatch(signupUser(data));
  };

  useEffect(() => {
    if (localStorage.token) {
      history.push("/");
    }
  }, [loading]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {error && !logged && "Something went wrong! Check your credentials"}
      {logged && "successfully logged in"}
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
      {loading ? (
        <Loader type="ThreeDots" color="#00BFFF" height={15} width={15} />
      ) : (
        <div>
          <input type="submit" value={"sign up"} />
        </div>
      )}
    </form>
  );
}

export default Signup;
