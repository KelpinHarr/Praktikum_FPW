import { configureStore } from "@reduxjs/toolkit";
import playerSlice from "./playerSlice";

export default configureStore({
    reducer: {
        player: playerSlice
    }
})