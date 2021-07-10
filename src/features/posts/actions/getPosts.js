import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk("posts/getPosts", async page => {
  const token = JSON.parse(localStorage.token) ?? "";

  return axios({
    method: "get",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    url: `https://interview.nerdzlab.dev/api/posts?page=${page}`,
  })
    .then(res => {
      return res.data;
    })
    .catch(e => {
      console.log(e, "posts");
    });
});
