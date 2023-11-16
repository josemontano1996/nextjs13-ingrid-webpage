import { FC, ReactNode, useReducer } from "react";
import { ICartProduct } from "@/interfaces/ICart";
import { CartContext } from "./CartContext";
import { cartReducer } from "./cartReducer";

export interface CartState {
  cart: ICartProduct[];
}

const Cart_INITIAL_STATE: CartState = {
  cart: [],
};

interface Props {
  children: ReactNode;
}

export const CartProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, Cart_INITIAL_STATE);

  const updateCart = (cartItem: ICartProduct) => {
    const existingItem = state.cart.find((item) => item._id === cartItem._id);

    if (existingItem) {
      cartItem.quantity === 0
        ? "delete"
        : dispatch({ type: "Cart-Update Item", payload: cartItem });
    } else {
      ("add item");
    }
  };

  return (
    <CartContext.Provider value={{ ...state }}>{children}</CartContext.Provider>
  );
};
