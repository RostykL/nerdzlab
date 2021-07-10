import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createPost = createAsyncThunk(
  "posts/createPost",
  async ({ price, title, is_available }) => {
    const token = JSON.parse(localStorage.token) ?? "";

    return axios({
      method: "post",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: {
        price,
        title,
        is_available,
      },
      url: "https://interview.nerdzlab.dev/api/posts",
    })
      .then(res => {
        return res.data;
      })
      .catch(e => {
        console.log(e, "posts");
      });
  }
);
