import { IMenuItem } from "./IMenuItem";

export interface ICartProduct extends IMenuItem {
  quantity?: number;
}

export interface IShippingAddress {
  firstName: string;
  lastName: string;
  address: string;
  address2?: string;
  zip: string;
  city: string;
  country: string;
  phone: string;
}
