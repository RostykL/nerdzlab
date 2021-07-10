import { createSlice } from "@reduxjs/toolkit";
import { createPost } from "./actions/createPost";
import { getPosts } from "./actions/getPosts";
import { getPostById } from "./actions/getPostById";
import { deletePost } from "./actions/deletePost";

const initialState = {
  posts: [],
  loading: false,
  error: null,
  selectedPost: {},
};

export const posts = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [createPost.pending]: state => {
      state.loading = true;
    },
    [createPost.fulfilled]: (state, { payload: { data } }) => {
      state.loading = false;
      console.log(data, "created");
      state.posts.push(data);
    },
    [createPost.rejected]: (state, { payload }) => {
      state.status = false;
      state.error = payload;
    },

    [getPosts.pending]: state => {
      state.loading = true;
    },
    [getPosts.fulfilled]: (state, { payload: { data } }) => {
      state.loading = false;
      state.posts = data;
    },
    [getPosts.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    [getPostById.fulfilled]: (state, action) => {
      state.post = action.payload;
    },
    [getPostById.rejected]: (state, { payload }) => {
      state.error = payload;
    },

    [deletePost.pending]: (state, action) => {
      state.loading = true;
    },
    [deletePost.fulfilled]: (state, action) => {
      state.loading = false;
      const { arg } = action.meta;
      state.posts = state.posts.filter(({ id }) => id !== arg); // arg - id
    },
    [deletePost.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const {} = posts.actions;

export default posts.reducer;
