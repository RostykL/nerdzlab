import { configureStore } from "@reduxjs/toolkit";
import signup from "./slices/signup/signup";
import login from "./slices/login/login";

export const store = configureStore({
  reducer: {
    signup,
    login,
  },
});
