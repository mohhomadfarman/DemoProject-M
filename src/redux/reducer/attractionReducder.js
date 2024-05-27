import { createSlice } from "@reduxjs/toolkit";

import {
  acttractionAction,
  acttractionActionsingle,
} from "../actions/attractions";

const initialState = {
  isLoading: false,
  BusinessListingss: [],
  error: "",
};
const attractionsListing = createSlice({
  name: "lesting",
  initialState,

  extraReducers: (bulider) => {
    bulider.addCase(acttractionAction.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(acttractionAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.BusinessListingss = action?.payload;
      state.error = "";
    });
    bulider.addCase(acttractionAction.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
    bulider.addCase(acttractionActionsingle.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(acttractionActionsingle.fulfilled, (state, action) => {
      state.isLoading = false;
      state.attractionsListing = action?.payload;
      state.error = "";
    });
    bulider.addCase(acttractionActionsingle.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
  },
});

export default attractionsListing.reducer;
