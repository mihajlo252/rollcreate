import { createSlice } from "@reduxjs/toolkit";

const localUser = JSON.parse(localStorage.getItem("sb-ginityejycllnrdlmmue-auth-token"))

export const user = createSlice({
  name: "user",
  initialState: {
    userData: localUser
  },
  reducers: {
    login: (state, action) => {
      state.userData = action.payload
    },
    logout: (state) => {
      state.userData = null;
    },
  }
});

// Action creators are generated for each case reducer function
export const { login, logout } = user.actions;
export default user.reducer;