"use client";
import { ICartProduct, IShippingAddress } from "@/interfaces/ICart";
import { createContext } from "react";

interface ContextProps {
  isLoaded: boolean;
  cart: ICartProduct[];
  numberOfItems: number;
  subTotal: number;
  tax: number;
  total: number;

  shippingAddress?: IShippingAddress;

  //Methods
  addProductToCart: (menuItem: ICartProduct, quantity:number) => void;
}

export const CartContext = createContext({} as ContextProps);
