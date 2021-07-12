import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../helpers/API";
import URL from "../../../helpers/URL";

export const editPostById = createAsyncThunk(
  "posts/editPostById",
  async ({ id, data }) => {
    return API.post(`${URL.editPostById}/${id}`, data, {
      headers: {
        Accept: "application/json",
      },
    })
      .then(res => {
        return res.data.data;
      })
      .catch(e => {
        return e;
      });
  }
);
