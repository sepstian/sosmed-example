import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "./postReducer";
import userReducer from "./userReducer";


const globalState = configureStore({
    reducer: {
        postReducer,
        userReducer, 
    }
})

export default globalState
