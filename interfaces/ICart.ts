import { IMenuItem } from "./IMenuItem";

export interface ICartProduct extends IMenuItem {
  quantity?: number;
}

export interface IShippingAddress {
  irstName: string;
  lastName: string;
  address: string;
  address2?: string;
  zip: string;
  city: string;
  country: string;
  phone: string;
}
