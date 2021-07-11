import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./actions/loginUserThunk";

const initialState = {
  loading: null,
  error: null,
};

const login = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: {
    [loginUser.pending]: state => {
      state.loading = true;
    },
    [loginUser.fulfilled]: state => {
      state.loading = false;
      state.error = null;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default login.reducer;
