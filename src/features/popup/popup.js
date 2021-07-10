import { createSlice } from "@reduxjs/toolkit";
import { toggle } from "../../helpers/toggle";

const initialState = {
  edit: false,
  create: false,
  delete: false,
};

const popup = createSlice({
  name: "popup",
  initialState,
  reducers: {
    toggleEdit: toggle("edit"),
    toggleCreate: toggle("create"),
    toggleAllOff: state => {
      for (const key of Object.keys(initialState)) {
        state[key] = false;
      }
    },
  },
});

export const { toggleEdit, toggleCreate, toggleAllOff } = popup.actions;

export default popup.reducer;
