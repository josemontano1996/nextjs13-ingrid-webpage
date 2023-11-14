"use client";

import { ChangeEvent, FC, FormEvent, useContext, useState } from "react";
import { IMenuItem } from "@/interfaces/IMenuItem";

interface Props {
  menuItem: IMenuItem;
}

export const AddToCartSection: FC<Props> = ({ menuItem }) => {
  const [quantity, setQuantity] = useState<number>(0);

  const onSetQuantityChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
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

  const onFormSubmit = () => {
    if (quantity < menuItem.minServings!) {
      return;
    }

    /*   addProductToCart(menuItem, quantity); */

    alert("Product added to the cart");
  };

  return (
    <form className="mt-2" onSubmit={onFormSubmit}>
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
