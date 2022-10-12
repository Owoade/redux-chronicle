import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./slices"

export const store = configureStore({
    reducer: {
      cart: cartReducer
    },
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export const selectItems = (state:RootState) => state.cart

export type AppDispatch = typeof store.dispatch
  