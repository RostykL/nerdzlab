import { createSlice } from "@reduxjs/toolkit";
import { createPost } from "./actions/createPost";
import { getPosts } from "./actions/getPosts";
import { deletePost } from "./actions/deletePost";
import { editPostById } from "./actions/editPost";

const initialState = {
  posts: [],
  loading: false,
  error: null,
  selectedPost: {},
};

export const posts = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPostById: (state, action) => {
      state.selectedPost = state.posts.filter(
        ({ id }) => id === action.payload
      )[0];
    },
  },
  extraReducers: {
    [createPost.pending]: state => {
      state.loading = true;
    },
    [createPost.fulfilled]: (state, action) => {
      state.loading = false;
      console.log(action);
      state.posts.push(action.payload.data);
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

    [editPostById.pending]: state => {
      state.loading = true;
    },
    [editPostById.fulfilled]: (state, { payload }) => {
      state.loading = false;
      const postToUpdate = state.posts.findIndex(
        post => post.id === payload.id
      );
      state.posts[postToUpdate] = payload;
    },
    [editPostById.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
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

export const { getPostById } = posts.actions;

export default posts.reducer;
