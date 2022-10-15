import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs/promises";





const initialState: { mode: Theme } = {
  mode: "light"
}

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers:{
    switchTheme(state){
      state.mode = state.mode === "dark" ? "light" : "dark"
    }
  }
})

export const { switchTheme } = themeSlice.actions;

export default themeSlice.reducer;
