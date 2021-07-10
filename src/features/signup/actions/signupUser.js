import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setAuth } from "../../auth/auth";

export const signupUser = createAsyncThunk(
  "signup/signupUser",
  async ({ email, name, password }, { dispatch }) => {
    return axios({
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      data: {
        email,
        name,
        password,
      },
      url: "https://interview.nerdzlab.dev/api/auth/register",
    }).then(res => {
      const { token } = res.data;
      localStorage.setItem("token", JSON.stringify(token));
      dispatch(setAuth(true));
      return res.data;
    });
  }
);
