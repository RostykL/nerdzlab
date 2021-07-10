import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import signup from "./signup/signup";
import login from "./login/login";
import posts from "./posts/posts";
import auth from "./auth/auth";

const reducers = combineReducers({
  signup,
  login,
  posts,
  auth,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;

// export const store = configureStore({
//   reducer: {
//     signup,
//     login,
//     posts,
//     auth,
//   },
// });
