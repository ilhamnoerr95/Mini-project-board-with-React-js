import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: false,
  progressBar: "",
};

export const utilities = createSlice({
  name: "Utils",
  initialState,
  reducers: {
    actionModal: (state, action) => {
      state.modal = action.payload;
    },
    actionProgressBar: (state, action) => {
      state.progressBar = action.payload;
    },
  },
});

export const { actionModal, actionProgressBar } = utilities.actions;

export const selectModal = (state) => state.utils.modal;
export const selectProgress = (state) => state.utils.modal;

export default utilities.reducer;
