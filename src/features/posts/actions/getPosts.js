import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../helpers/API";
import URL from "../../../helpers/URL";

export const getPosts = createAsyncThunk("posts/getPosts", async page => {
  return API.get(`${URL.getPosts}${page}`, {
    headers: {
      Accept: "application/json",
    },
  })
    .then(res => {
      return res.data;
    })
    .catch(e => {
      return e;
    });
});
