"use client";
import { FC, ReactNode, useReducer } from "react";

import { CartContext } from "./CartContext";
import { cartReducer } from "./cartReducer";
import { ICartProduct } from "@/interfaces/ICart";

export interface CartState {
  isLoaded: boolean;
  cart: ICartProduct[];
  numberOfItems: number;
  subTotal: number;
  tax: number;
  total: number;
}

const Cart_INITIAL_STATE: CartState = {
  isLoaded: false,
  cart: [],
  numberOfItems: 0,
  subTotal: 0,
  tax: 0,
  total: 0,
};

interface Props {
  children: ReactNode;
}

export const CartProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, Cart_INITIAL_STATE);

  const addProductToCart = (menuItem: ICartProduct, quantity: number) => {
    const productInCart = state.cart.some((p) => p._id === menuItem._id);
    let newCartProduct = menuItem;

    //If the product is newly added
    if (!productInCart) {
      newCartProduct.quantity = quantity;
      return dispatch({
        type: "Cart-Add to Cart",
        payload: [...state.cart, newCartProduct],
      });
    }

    //If the product is already in the cart
    const newCart = state.cart.map((p) => {
      if (p._id === menuItem._id) {
        p.quantity = p.quantity! + quantity;
      }
      return p;
    });
    console.log(newCart);
    return dispatch({ type: "Cart-Add to Cart", payload: [...newCart] });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,

        //Methods
        addProductToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
