import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPostById = createAsyncThunk("posts/getPostById", async id => {
  const token = JSON.parse(localStorage.token) ?? "";

  return axios({
    method: "get",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    url: `https://interview.nerdzlab.dev/api/posts/${id}`,
  })
    .then(res => {
      console.log(res);
      return res.data.data;
    })
    .catch(e => {
      console.log(e, "posts");
    });
});
