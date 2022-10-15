import { configureStore } from "@reduxjs/toolkit"
import themeReducer from "./slices"

export const store = configureStore({
    reducer: {
      theme: themeReducer
    },
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export const getTheme = (state:RootState) => state.theme
export type AppDispatch = typeof store.dispatch
  