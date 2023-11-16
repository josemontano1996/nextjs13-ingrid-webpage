"use client";

import { ChangeEvent, FC, FormEvent, useContext, useState } from "react";
import { CartContext } from "@/context/cart/CartContext";
import { IMenuItem } from "@/interfaces/IMenuItem";
import { ICartProduct } from "@/interfaces/ICart";

interface Props {
  menuItem: ICartProduct;
}

export const AddToCartSection: FC<Props> = ({ menuItem }) => {
  const { cart, updateCart } = useContext(CartContext);

  const [quantity, setQuantity] = useState<number>(
    cart?.find((item) => item._id === menuItem._id)?.quantity || 0,
  );

  const onQuantityChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    //in this code I make a number jump, if the user decreses the quantity under
    //the minServings it automatically jumps to 0, if it increses it is automatically
    //set to minServings
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

    //0 will delete the item in the state
    if (
      menuItem.minServings &&
      quantity > 0 &&
      quantity < menuItem.minServings
    ) {
      return;
    }

    menuItem.quantity = quantity;

    updateCart(menuItem);
  };

  return (
    <form className="mt-2" onSubmit={(e) => onFormSubmit(e)}>
      <label>Quantity</label>
      <input
        type="number"
        className="border-gray mx-2 w-12 border text-center"
        value={quantity}
        onChange={onQuantityChange}
      />
      <button className="inline-block rounded-md bg-info px-2 py-2 text-sm text-bg">
        Update to Cart
      </button>
    </form>
  );
};
