import { Route, Switch } from "react-router-dom";
import "./styles/global.scss";
import AllPosts from "./pages/allPosts/AllPosts";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Header from "./components/header/header";

import CreatePost from "./components/create/createPost";
import EditPost from "./components/edit/EditPost";

function App() {
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
