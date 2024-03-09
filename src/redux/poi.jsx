import { createSlice } from "@reduxjs/toolkit";

export const poi = createSlice({
  name: "poi",
  initialState: {
    poi: {},
  },
  reducers: {
    poiChange: (state, action) => {
      state.poi = action.payload
    },
  }
});

// Action creators are generated for each case reducer function
export const { poiChange } = poi.actions;
export default poi.reducer;