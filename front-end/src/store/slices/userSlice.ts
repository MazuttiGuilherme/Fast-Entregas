import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../entities/User";

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

        },
        deleteUser: () => {

        }
    }
})

export const { updateUser, deleteUser } = slice.actions

export default slice.reducer