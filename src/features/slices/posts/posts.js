import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: 0,
  status: null,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  // extraReducers: {
  //   [getPosts.pending]: (state, action) => {
  //     state.status = "loading";
  //   },
  //   [getPosts.fulfilled]: (state, action) => {
  //     state.status = "success";
  //   },
  //   [getPosts.rejected]: (state, action) => {
  //     state.status = "failed";
  //   },
  // },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
