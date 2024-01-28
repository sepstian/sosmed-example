import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "./postReducer";
import { accountReducer } from "./accountReducer";
import userReducer from "./userReducer";


const globalState = configureStore({
    reducer: {
        postReducer,
        userReducer, 
        accountReducer
    }
})

export default globalState
