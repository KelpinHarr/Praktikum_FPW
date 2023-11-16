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
            const index = state.arrCart.findIndex((cart) => cart.dealID === action.payload)

            if (index == -1){
                throw new Error("Not found")
            }
            state.arrCart.splice(index, 1);
        }
    }
});

export const {AddCart, RemoveCart} = cartSlice.actions;
export default cartSlice.reducer;