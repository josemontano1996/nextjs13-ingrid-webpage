import { ICartProduct } from "@/interfaces/ICart";
import { CartState } from "./CartProvider";

type CartActionType =
  | { type: "Cart-load cart from storage"; payload: ICartProduct[] }
  | { type: "Cart-update item quantity"; payload: ICartProduct }
  | { type: "Cart-add item"; payload: ICartProduct }
  | { type: "Cart-delete item"; payload: ICartProduct };

export const cartReducer = (
  state: CartState,
  action: CartActionType,
): CartState => {
  switch (action.type) {
    case "Cart-load cart from storage":
      return {
        ...state,
        cart: [...action.payload],
      };
    case "Cart-add item":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "Cart-update item quantity":
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item._id === action.payload._id) {
            item.quantity = action.payload.quantity;
          }
          return item;
        }),
      };
    case "Cart-delete item":
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload._id),
      };

    default:
      return state;
  }
};
