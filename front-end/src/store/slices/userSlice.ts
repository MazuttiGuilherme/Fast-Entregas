import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../entities/User";
import { RootState } from "../store";

type UserState = {
    loadingUser: boolean
    user: User | null
}

const initialState: UserState = {
    loadingUser: true,
    user: null
}

const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser: (state, action: PayloadAction<User>) => {
            state.loadingUser = false
            state.user = action.payload
        },
        deleteUser: (state) => {
            state.loadingUser = false
            state.user = null
        }
    }
})

export const { updateUser, deleteUser } = slice.actions

export default slice.reducer

export const selectIsUserLoggedIn = (state: RootState) => !!state.userData.user
export const selectIsLoadingUser = (state: RootState) => state.userData.loadingUser
export const selectUser = (state: RootState) => state.userData.user
