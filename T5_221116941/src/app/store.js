import { configureStore } from "@reduxjs/toolkit";
import wishSlice from "./wishSlice";
import cartSlice from "./cartSlice";

export default configureStore({
    reducer: {
        wishlist: wishSlice,
        cart: cartSlice
    }
})