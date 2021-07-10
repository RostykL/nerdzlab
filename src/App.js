import { Route, Switch, useHistory } from "react-router-dom";
import "./styles/global.scss";
import AllPosts from "./pages/allPosts/AllPosts";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Header from "./components/header/header";
import { useEffect } from "react";

function App() {
  // const history = useHistory();
  // useEffect(() => {
  //   if (!localStorage.token) {
  //     history.push("/login");
  //   }
  // }, []);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path={"/"} component={AllPosts} />
        <Route path={"/login"} component={Login} />
        <Route path={"/signup"} component={Signup} />
        <Route path={"*"} component={() => <span>Not Found</span>} />
      </Switch>
    </>
  );
}

export default App;
