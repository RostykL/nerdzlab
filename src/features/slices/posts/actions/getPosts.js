import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// axios.defaults.baseURL = "https://bloggy-api.herokuapp.com";
//
// const getAllPosts = createAsyncThunk(
//   "posts/getAllPosts",
//   async (_, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.get("/posts");
//       return data;
//     } catch ({ response }) {
//       return rejectWithValue(response.status);
//     }
//   }
// );
