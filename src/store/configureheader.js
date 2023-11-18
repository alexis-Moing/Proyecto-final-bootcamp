import { configureStore } from "@reduxjs/toolkit"
import loginState from './loginState'

export const store = configureStore({
    reducer: {
        auth: loginState
    }
})