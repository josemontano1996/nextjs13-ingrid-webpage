import { ICartProduct } from "@/interfaces/ICart";
import { CartState } from "./CartProvider";

type CartActionType =
  | {
      type: "Cart-Add to Cart";
      payload: ICartProduct[];
    }
  | { type: "Cart-Load Cart from Cookies"; payload: ICartProduct[] };

export const cartReducer = (
  state: CartState,
  action: CartActionType,
): CartState => {
  switch (action.type) {
    case "Cart-Add to Cart":
      return {
        ...state,
        cart: action.payload,
      };
    case "Cart-Load Cart from Cookies":
      return {
        ...state,
      };
    default:
      return state;
  }
};
