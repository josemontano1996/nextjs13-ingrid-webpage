import { createContext } from "react";
import { ICartProduct } from "@/interfaces/ICart";

interface ContextProps {
  cart: ICartProduct[];
}

export const CartContext = createContext({} as ContextProps);
