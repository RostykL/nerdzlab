import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../helpers/API";
import URL from "../../../helpers/URL";

export const createPost = createAsyncThunk(
  "posts/createPost",
  async ({ price, title, is_available }) => {
    return API.post(
      `${URL.create}`,
      {
        price,
        title,
        is_available,
      },
      {
        headers: {
          Accept: "application/json",
        },
      }
    )
      .then(res => {
        return res.data;
      })
      .catch(e => {
        console.log(e, "posts");
        return e;
      });
  }
);
