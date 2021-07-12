import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../../features/signup/actions/signupUser";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import SELECTOR from "../../features/selectors";
import { Form, Input } from "../../styled/general.styled";
import FormLoader from "../../components/loader/Loader";
import FormButtons from "../../components/FormButtons/FormButtons";

function Signup() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const { loading, error } = useSelector(SELECTOR.getSignup);
  const { logged } = useSelector(SELECTOR.getAuth);

  const onSubmit = data => {
    dispatch(signupUser(data));
  };

  useEffect(() => {
    if (localStorage.token) {
      history.push("/");
    }
  }, [loading]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {error && !logged && "Something went wrong! Check your credentials"}
      {logged && "successfully logged in"}
      <div>
        <Input
          type={"name"}
          required
          {...register("name", { required: true })}
          placeholder={"name"}
        />
      </div>
      <div>
        <Input
          type={"password"}
          required
          {...register("password", { required: true })}
          placeholder={"password"}
          minLength={8}
        />
      </div>
      <div>
        <Input
          type={"email"}
          required
          {...register("email", { required: true })}
          placeholder={"email"}
        />
      </div>
      {loading ? (
        <FormLoader height={30} width={30} />
      ) : (
        <FormButtons buttonType={"Sign up"} />
      )}
    </Form>
  );
}

export default Signup;
