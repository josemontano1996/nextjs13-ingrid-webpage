import { ICartProduct } from "@/interfaces/ICart";
import { createSlice } from "@reduxjs/toolkit";

export interface ICartState {
  cart: ICartProduct[];
}

const initialState: ICartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
    reducers: {
        addToCart: (state, action) => {
            
        }
  },
});

export const { } = cartSlice.actions;

export default cartSlice.reducer;