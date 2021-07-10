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
      localStorage.setItem("auth", action.payload);
      state.logged = JSON.parse(localStorage.auth);
    },
    setAuthError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setAuth, setAuthError } = auth.actions;

export default auth.reducer;
