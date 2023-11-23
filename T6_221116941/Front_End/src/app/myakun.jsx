import {createSlice, current} from "@reduxjs/toolkit";

export const myakun = createSlice(
    {
        name: "myakun",
        initialState: {
            isLoggedIn: false, 
            userLogin:{
                email: null
            }
        },
        reducers: {
            doLogin: (state, action)=>{
                const {email} = action.payload;
                state.isLoggedIn = true; 
                state.userLogin = {
                    email: email
                };
            },
        }
    }
);
export const {doLogin, } = myakun.actions;
export default myakun.reducer;