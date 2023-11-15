"use client";

import { ChangeEvent, FC, FormEvent, useContext, useState } from "react";
import { IMenuItem } from "@/interfaces/IMenuItem";

import { useCartStore } from "@/hooks/useCartStore";
import { ICartProduct } from "@/interfaces/ICart";

interface Props {
  menuItem: IMenuItem;
}

export const AddToCartSection: FC<Props> = ({ menuItem }) => {
  const { cart, updateCart } = useCartStore();
  const [quantity, setQuantity] = useState<number>(0);

  const onSetQuantityChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    //Aqui quiero leer la cantidad en el estado de redux y modificarla
    const newValue = Number(target.value);
    if (menuItem.minServings && newValue < 0) {
      return;
    }
    if (
      menuItem.minServings &&
      newValue < quantity &&
      newValue < menuItem.minServings
    ) {
      return setQuantity(0);
    }
    if (menuItem.minServings && newValue < menuItem.minServings) {
      return setQuantity(menuItem.minServings);
    }
    setQuantity(Number(target.value));
  };

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (quantity < 0) {
      return;
    }

    const cartProduct: ICartProduct = { ...menuItem, quantity };

    updateCart(cartProduct);
  };

  return (
    <form className="mt-2" onSubmit={(e) => onFormSubmit(e)}>
      <label>Quantity</label>
      <input
        type="number"
        className="border-gray mx-2 w-12 border text-center"
        value={quantity}
        onChange={onSetQuantityChange}
      />
      <button className="inline-block rounded-md bg-info px-2 py-2 text-sm text-bg">
        Add to Cart
      </button>
    </form>
  );
};
