import { Route, Switch } from "react-router-dom";
import AllPosts from "./pages/allPosts/AllPosts";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import { withContainer } from "./hoc/withContainer";

function App() {
  return (
    <>
      <Switch>
        <Route exact path={"/"} component={withContainer(AllPosts)} />
        <Route path={"/login"} component={withContainer(Login)} />
        <Route path={"/signup"} component={withContainer(Signup)} />
        <Route
          path={"*"}
          component={withContainer(() => (
            <span>Not Found</span>
          ))}
        />
      </Switch>
    </>
  );
}

export default App;
