import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Estimate } from "../../entities/Estimate"

type EstimateState = {
    currentEstimate: Estimate | null
}

const initialState: EstimateState = {
    currentEstimate: null
}

const slice = createSlice({
    name: 'estimate',
    initialState,
    reducers: {
        setCurrentEstimate: (state, action: PayloadAction<Estimate>) => {
            state.currentEstimate =action.payload
        },
        clearCurrentEstimate: () => initialState
    }
})

export const { setCurrentEstimate, clearCurrentEstimate } = slice.actions

export default slice.reducer