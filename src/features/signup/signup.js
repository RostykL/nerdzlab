import { createSlice } from "@reduxjs/toolkit";
import { signupUser } from "./actions/signupUser";

const initialState = {
  loading: null,
  error: null,
};

const signup = createSlice({
  name: "signup",
  initialState,
  reducers: {},
  extraReducers: {
    [signupUser.pending]: state => {
      state.loading = true;
    },
    [signupUser.fulfilled]: state => {
      state.loading = false;
      state.error = null;
    },
    [signupUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action?.error ?? true;
    },
  },
});

export default signup.reducer;
