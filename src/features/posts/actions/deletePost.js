import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const deletePost = createAsyncThunk("posts/deletePost", async id => {
  const token = JSON.parse(localStorage.token) ?? "";

  return axios({
    method: "delete",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    url: `https://interview.nerdzlab.dev/api/posts/${id}`,
  })
    .then(res => {
      return res.data;
    })
    .catch(e => {
      console.log(e, "posts");
    });
});
