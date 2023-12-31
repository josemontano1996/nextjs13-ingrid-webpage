import { FC } from "react";
import { MenuItem } from "./MenuItem";
import { IMenuItem } from "@/interfaces/IMenuItem";

interface Props {
  title: string;
  menuItems: IMenuItem[];
  prioImgs: boolean;
  id: string;
}

export const MenuList: FC<Props> = ({
  title,
  menuItems,
  id,
  prioImgs = false,
}) => {
  return (
    <div className="mb-10" id={id}>
      <h3>{title}</h3>
      <ul
        id="starters"
        className="grid grid-cols-3 justify-center gap-6 sm:grid-cols-2 sm:gap-0 xs:grid-cols-1"
      >
        {menuItems.map((i) => (
          <MenuItem menuItem={i} key={i.slug} prioImg={prioImgs} />
        ))}
      </ul>
    </div>
  );
};
