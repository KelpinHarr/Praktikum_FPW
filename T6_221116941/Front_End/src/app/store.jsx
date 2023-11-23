import { configureStore } from "@reduxjs/toolkit";
import myakun from "./myakun";

export default configureStore({
  reducer: {
    myakun: myakun
  },
});
