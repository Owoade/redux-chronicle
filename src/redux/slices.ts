import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs/promises";

type ICart = ICartitem[];

export interface ICartitem {
  name: string;
  quantity: number;
}
export const initialState: { items: ICart } = { items: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<ICartitem>) {
        
      if (
        state.items.some(
          (item) =>
            item.name === action.payload.name &&
            item.quantity === action.payload.quantity
        )
      )
        return;

      if (state.items.some((item) => item.name === action.payload.name)){

        const { name, quantity } = action.payload

        state.items = [...state.items.filter((item) => item.name !== action.payload.name), { name, quantity}]


        return 

      }

      state.items.push(action.payload);

    },
    removeItem(state, action: PayloadAction<string>) {

      state.items = state.items.filter(
        (item) => item.name !== action.payload
      );
      
    },
    getItems(state) {
      return initialState;
    },
  },
});

export const { addItem, removeItem, getItems } = cartSlice.actions;

export default cartSlice.reducer;
