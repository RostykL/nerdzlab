import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signupUser = createAsyncThunk(
  "signup/signupUser",
  async ({ email, name, password }) => {
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
      return res.data;
    });
  }
);
