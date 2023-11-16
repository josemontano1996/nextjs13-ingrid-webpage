import { createContext } from "react";
import { ICartProduct } from "@/interfaces/ICart";

interface ContextProps {
  cart: ICartProduct[];

  updateCart: (cartItem: ICartProduct) => void;
}

export const CartContext = createContext({} as ContextProps);
