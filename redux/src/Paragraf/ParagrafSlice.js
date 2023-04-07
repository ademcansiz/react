import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : "I'm learning redux",
}

export const ParagrafSlice = createSlice({
    name: "Paragraf",
    initialState,
    reducers: {
        ekle: (state) => {
          state.value += " toolkit"
        },
    }
})

export const {ekle} = ParagrafSlice.actions

export default ParagrafSlice.reducer
