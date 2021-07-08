import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "login/loginUser",
  async ({ email, password }) => {
    return axios({
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      data: {
        email,
        password,
      },
      url: "https://interview.nerdzlab.dev/api/auth/login",
    }).then(res => {
      const { token } = res.data;
      localStorage.setItem("token", JSON.stringify(token));
      return res.data;
    });
  }
);