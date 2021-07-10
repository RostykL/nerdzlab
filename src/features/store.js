import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import signup from "./signup/signup";
import login from "./login/login";
import posts from "./posts/posts";
import auth from "./auth/auth";
import popup from "./popup/popup";

const reducers = combineReducers({
  signup,
  login,
  posts,
  auth,
  popup,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }),
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
