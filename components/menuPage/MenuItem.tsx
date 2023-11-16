import { FC } from "react";
import { IMenuItem } from "@/interfaces/IMenuItem";
import { Img } from "../ui/Img";
import { AddToCartSection } from "./AddToCartSection";

interface Props {
  menuItem: IMenuItem;
  prioImg: boolean;
}

export const MenuItem: FC<Props> = ({ menuItem, prioImg }) => {
  return (
    <li className="mt-4 flex flex-col items-center justify-between rounded-2xl border border-info py-4 px-4 hover:shadow-2xl">
      <h6 className="mb-4 italic">{menuItem.name}</h6>
      <Img
        url={menuItem.image}
        altText={menuItem.name}
        aspectRatioMeasure="1/1"
        widthMeasure="70%"
        prio={prioImg}
      />
      <p className="mx-auto my-2 text-lg sm:w-11/12">{menuItem.description}</p>
      <div className="mx-auto mb-4 sm:w-11/12">
        {menuItem.allergens?.length !== 0 && (
          <p>Allergens: {menuItem.allergens!.join(", ")}.</p>
        )}
        <p>
          <span className="text-2xl">{menuItem.price} &euro;</span> per serving
        </p>
        <p className="text-sm">Min. {menuItem.minServings} serving</p>
      </div>
      <AddToCartSection menuItem={menuItem} />
    </li>
  );
};
