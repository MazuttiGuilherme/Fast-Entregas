import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice"

const store = configureStore({
    reducer: {
        userData: userReducer,
        userData2: userReducer

    }
})

export default store

export type RootState = ReturnType<typeof store.getState>