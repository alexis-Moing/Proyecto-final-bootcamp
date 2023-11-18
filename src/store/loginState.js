import { createSlice } from "@reduxjs/toolkit";

const initialState = "close";

export const loginState = createSlice({
    name: "close",
    initialState,
    reducers: {
        hidde: (state) => {
             
            const menu = "close";
            return menu;
        },
        show : (state) => {

            const menu = "open";
            return menu;
        }
    }
})

export default loginState.reducer;
export const { hidde, show } = loginState.actions;