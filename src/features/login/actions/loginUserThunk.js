import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setAuth } from "../../auth/auth";

export const loginUser = createAsyncThunk(
  "login/loginUser",
  async ({ email, password }, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await axios({
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
      });
      localStorage.setItem("token", JSON.stringify(data.token));
      dispatch(setAuth(true));
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.status);
    }
  }
);
