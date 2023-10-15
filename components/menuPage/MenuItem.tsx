import { FC } from "react";
import { IMenuItem } from "@/interfaces/IMenuItem";
import { Img } from "../ui/Img";
import { AddToCartSection } from "./AddToCartSection";

interface Props {
  menuItem: IMenuItem;
}

export const MenuItem: FC<Props> = ({ menuItem }) => {
  return (
    <li className="flex flex-col items-center justify-between">
      <h6 className="mb-4 italic">{menuItem.name}</h6>
      <Img
        url={menuItem.image}
        altText={menuItem.name}
        aspectRatioMeasure="1/1"
        widthMeasure="70%"
      />
      <p className="mx-auto my-2  sm:w-11/12">{menuItem.description}</p>
      <div className="mx-auto mb-4 sm:w-11/12">
        <p className="text-sm">Allergens: {menuItem.allergens}</p>
        <p className="text-sm">Min. {menuItem.minServings} serving</p>
        <p>
          <span className="text-2xl">{menuItem.price} &euro;</span> per serving
        </p>
        <AddToCartSection
          minimumRequired={menuItem.minServings}
        />
      </div>
    </li>
  );
};
