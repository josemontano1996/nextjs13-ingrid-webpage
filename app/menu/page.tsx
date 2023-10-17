import { Metadata } from "next";
import { MenuList } from "@/components/menuPage/MenuList";
import { IMenuItem } from "@/interfaces/IMenuItem";
import { getProductsServer } from "@/lib/getProductsServer";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Menu Page",
  description: `Chef d${`'`}Arconso Menu page`,
};

const MenuPage = async () => {
  const products: IMenuItem[] = await getProductsServer();

  const starterDishes = products.filter(
    (product) => product.type === "starter",
  );

  const mainDishes = products.filter((product) => product.type === "mainDish");

  const dessertDishes = products.filter(
    (product) => product.type === "dessert",
  );

  return (
    <section className="centering">
      <h2 className="text-center italic">Menu</h2>
      <div className="text-center">
        <MenuList
          id="starters"
          title="Starters"
          menuItems={starterDishes}
          prioImgs={true}
        />
        <MenuList
          id="mainDishes"
          title="Main Dishes"
          menuItems={mainDishes}
          prioImgs={false}
        />
        <MenuList
          id="desserts"
          title="Desserts"
          menuItems={dessertDishes}
          prioImgs={false}
        />
      </div>
    </section>
  );
};

export default MenuPage;
