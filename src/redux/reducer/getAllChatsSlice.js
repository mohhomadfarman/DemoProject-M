import { createSlice } from "@reduxjs/toolkit";
import {  getAllChats } from "../actions/LoginAction";

const initialState = {
  isLoading: false,
  data: [],
  error: "",
};
const getAllChatsSlice = createSlice({
  name: "getChats",
  initialState,

  extraReducers: (bulider) => {
    bulider.addCase(getAllChats.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(getAllChats.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action?.payload;
      state.error = "";
    });
    bulider.addCase(getAllChats.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
  },
});

// export const  = jobDataSlice.actions;
export default getAllChatsSlice.reducer;