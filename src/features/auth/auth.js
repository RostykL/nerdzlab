import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  logged: false,
  error: null,
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.logged = action.payload;
    },
  },
});

export const { setAuth } = auth.actions;

export default auth.reducer;
