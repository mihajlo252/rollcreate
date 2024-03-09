import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import pageReducer from "./page";
import poiReducer from "./poi";

export default configureStore({
  reducer: {
    userData: userReducer,
    page: pageReducer,
    poi: poiReducer
  }
})