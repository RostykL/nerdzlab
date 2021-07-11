import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../helpers/API";
import URL from "../../../helpers/URL";

export const deletePost = createAsyncThunk("posts/deletePost", async id => {
  return API.delete(`${URL.delete}/${id}`, {
    headers: {
      Accept: "application/json",
    },
  })
    .then(res => {
      return res.data;
    })
    .catch(e => {
      console.log(e, "posts");
      return e;
    });
});
