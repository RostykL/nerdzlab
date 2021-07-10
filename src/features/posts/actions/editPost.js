import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const editPostById = createAsyncThunk(
  "posts/editPostById",
  async ({ id, data }) => {
    const token = JSON.parse(localStorage.token) ?? "";

    return axios({
      method: "post",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      data,
      url: `https://interview.nerdzlab.dev/api/posts/${id}`,
    })
      .then(res => {
        console.log(res);
        return res.data.data;
      })
      .catch(e => {
        console.log(e, "posts");
      });
  }
);
