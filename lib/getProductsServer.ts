import { db } from "@/database";
import { IMenuItem } from "@/interfaces/IMenuItem";
import Product from "@/models/Product";

export const getProductsServer = async (): Promise<IMenuItem[]> => {
  await db.connect();
  const products = await Product.find().lean();
  await db.disconnect();

  return JSON.parse(JSON.stringify(products));
};
