import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from '../Counter/CounterSlice'
import ParagrafSlice from '../Paragraf/ParagrafSlice'

export const store = configureStore({
  reducer: {
    counter:CounterSlice,
    Paragraf:ParagrafSlice,
  },
})