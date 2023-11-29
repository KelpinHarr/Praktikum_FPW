import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    arrPlayer : []
}

export const playerSlice = createSlice({
    name : "player",
    initialState,
    reducers: {
        addPlayer: (state, action) => {
            const player = action.payload;
            state.arrPlayer.push(player);
        }
    }
})
export const { addPlayer } = playerSlice.actions;
export default playerSlice.reducer;