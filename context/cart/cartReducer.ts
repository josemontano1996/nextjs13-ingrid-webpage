import { ICartProduct } from "@/interfaces/ICart";
import { CartState } from "./cartProvider";

type CartActionType = { type: "Cart-Update Item"; payload: ICartProduct };

export const cartReducer = (state: CartState, action: CartActionType, ): CartState => {
  switch (action.type) {
    case "Cart-Update Item":
      return {
        ...state,
      };
    default:
      return state;
  }
};
