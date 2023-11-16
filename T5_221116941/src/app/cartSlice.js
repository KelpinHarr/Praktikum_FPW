import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    arrCart: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        AddCart: (state, action) => {
            const {game} = action.payload;
            state.arrCart.push(game);
        },
        RemoveCart: (state, action) => {

        }
    }
});

export const {AddCart, RemoveCart} = cartSlice.actions;
export default cartSlice.reducer;