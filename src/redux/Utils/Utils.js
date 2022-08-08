import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: false,
  progressBar: "",
  loading: false,
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
    actionLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { actionModal, actionProgressBar } = utilities.actions;

export const selectModal = (state) => state.Utils.modal;
export const selectProgress = (state) => state.Utils.progressBar;
export const selectLoading = (state) => state.Utils.loading;

export default utilities.reducer;
