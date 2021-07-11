import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setAuth } from "../../auth/auth";

export const signupUser = createAsyncThunk(
  "signup/signupUser",
  async ({ email, name, password }, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await axios({
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
      });
      const { token } = data;
      localStorage.setItem("token", JSON.stringify(token));
      dispatch(setAuth(true));
      return data;
    } catch (response) {
      return rejectWithValue(response.status);
    }
  }
);
