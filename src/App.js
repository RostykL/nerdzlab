import { Route, Switch, useHistory } from "react-router-dom";
import "./styles/global.scss";
import AllPosts from "./pages/allPosts/AllPosts";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Header from "./components/header/header";
import { useEffect } from "react";
import Popup from "./components/popup/Popup";
import CreatePost from "./components/popupCreatePost/createPost";
import { createPost } from "./features/posts/actions/createPost";
import { toggle } from "./features/popup/popup";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const { title, price, is_available } = useSelector(
    state => state.posts
  ).selectedPost;
  return (
    <>
      {/*<CreatePost*/}
      {/*  onSubmit={data => {*/}
      {/*    data = {*/}
      {/*      ...data,*/}
      {/*      price: Number(data.price),*/}
      {/*      is_available: Boolean(data.is_available),*/}
      {/*    };*/}
      {/*    console.log(data);*/}
      {/*    if (!isNaN(data.price)) {*/}
      {/*      dispatch(createPost(data));*/}
      {/*      dispatch(toggle());*/}
      {/*    }*/}
      {/*  }}*/}
      {/*/>*/}

      {/*edit post*/}
      <CreatePost
        titleDef={title}
        priceDef={price}
        availableDef={is_available}
        onSubmit={data => {
          console.log(data);
          // data = {
          //   ...data,
          //   price: Number(data.price),
          //   is_available: Boolean(data.is_available),
          // };
          // console.log(data);
          // if (!isNaN(data.price)) {
          //   dispatch(createPost(data));
          //   dispatch(toggle());
          // }
        }}
      />
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
