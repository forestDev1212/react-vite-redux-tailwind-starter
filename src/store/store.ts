import { configureStore } from "@reduxjs/toolkit";
import basicSlice from "./slice/basic.slice";


const store = configureStore({
  reducer: {
    basic: basicSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch


export default store