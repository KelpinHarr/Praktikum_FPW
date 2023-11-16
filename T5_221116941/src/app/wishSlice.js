import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    arrWishlist: []
}

export const wishSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers:{
        AddWishList: (state, action) => {
            const game = action.payload;
            state.arrWishlist.push(game);
        },
        RemoveWishlist: (state, action) => {
            const index = state.arrWishlist.findIndex((wish) => wish.dealID === action.payload)

            if (index == -1){
                throw new Error("Not found")
            }
            state.arrWishlist.splice(index, 1)
        }
    }
});
export const {AddWishList, RemoveWishlist} = wishSlice.actions;
export default wishSlice.reducer;