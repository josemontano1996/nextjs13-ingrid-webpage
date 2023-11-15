import { ICartProduct } from "@/interfaces/ICart";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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
    onUpdateCart: (state, { payload }: PayloadAction<ICartProduct>) => {
      const existingItem = state.cart.find((item) => item._id === payload._id);
      console.log(existingItem);
      if (existingItem) {
        payload.quantity === 0
          ? (state.cart = state.cart.filter((item) => item._id !== payload._id))
          : state.cart.map((item) => {
              item._id === payload._id && (item.quantity = payload.quantity);
              return item;
            });
      } else {
        state.cart.push(payload);
      }
    },
  },
});

export const { onUpdateCart } = cartSlice.actions;

export default cartSlice.reducer;
