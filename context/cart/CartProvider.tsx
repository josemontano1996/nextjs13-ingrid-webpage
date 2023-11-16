"use client";

import { FC, ReactNode, useEffect, useReducer } from "react";
import { ICartProduct } from "@/interfaces/ICart";
import { CartContext } from "./CartContext";
import { cartReducer } from "./cartReducer";
import Cookie from "js-cookie";

export interface CartState {
  cart: ICartProduct[];
}

const Cart_INITIAL_STATE: CartState = {
  cart: Cookie.get("cart") ? JSON.parse(Cookie.get("cart")!) : [],
};

interface Props {
  children: ReactNode;
}

export const CartProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, Cart_INITIAL_STATE);

  //loading the cart from cookie
  useEffect(() => {
    try {
      const cookieCart = Cookie.get("cart")
        ? JSON.parse(Cookie.get("cart")!)
        : [];
      dispatch({
        type: "Cart-load cart from storage",
        payload: cookieCart,
      });
    } catch (error) {
      dispatch({ type: "Cart-load cart from storage", payload: [] });
    }
  }, []);

  //updating the cookie when cart state changes
  useEffect(() => {
    Cookie.set("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  //this update functions manages to find if a product exists, if it exists already
  //and the new quantity is 0 it is deleted from state, if it is not the quantity is
  //updated, if the product is not found then the product is added to the state
  const updateCart = (cartItem: ICartProduct) => {
    const existingItem = state.cart.find((item) => item._id === cartItem._id);

    if (existingItem) {
      cartItem.quantity === 0
        ? dispatch({ type: "Cart-delete item", payload: cartItem })
        : dispatch({ type: "Cart-update item quantity", payload: cartItem });
    } else {
      dispatch({ type: "Cart-add item", payload: cartItem });
    }
  };

  return (
    <CartContext.Provider
      value={{
        ...state,

        //Methods
        updateCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
