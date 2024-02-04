import { createSlice } from "@reduxjs/toolkit";

export const page = createSlice({
  name: "page",
  initialState: {
    page: "home"
  },
  reducers: {
    pageChange: (state, action) => {
      state.page = action.payload
    },
  }
});

// Action creators are generated for each case reducer function
export const { pageChange } = page.actions;
export default page.reducer;