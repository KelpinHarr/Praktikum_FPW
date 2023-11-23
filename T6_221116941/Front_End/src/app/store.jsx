import { configureStore } from "@reduxjs/toolkit";
import myakun from "./myakun";
import story from "./story";

export default configureStore({
  reducer: {
    myakun: myakun,
    story: story
  },
});
