import { ICartProduct } from "./ICart";

export interface IUser {
  name: string;
  email: string;
  cart?: ICartProduct[];
  role: "admin" | "client";

  createdAt: string;
  updatedAt: string;
}
