import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: false,
};

export const utilities = createSlice({
  name: "Utils",
  initialState,
  reducers: {
    actionModal: (state, action) => {
      state.modal = action.payload;
    },
  },
});

export const { actionModal } = utilities.actions;

export const selectModal = (state) => state.utils.modal;

export default utilities.reducer;
