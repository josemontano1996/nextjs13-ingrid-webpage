"use client";
import { ChangeEvent, FC, useState } from "react";

interface Props {
  minimumRequired?: number;
}


export const AddToCartSection: FC<Props> = ({ minimumRequired = 0 }) => {
  const [quantity, setQuantity] = useState<number>(0);

  const onSetQuantityChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(target.value);
    if (minimumRequired && newValue < 0) {
      return;
    }
    if (minimumRequired && newValue < quantity && newValue < minimumRequired) {
      return setQuantity(0);
    }
    if (minimumRequired && newValue < minimumRequired) {
      return setQuantity(minimumRequired);
    }
    setQuantity(Number(target.value));
  };

  return (
    <div className="mt-2 ">
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
    </div>
  );
};
