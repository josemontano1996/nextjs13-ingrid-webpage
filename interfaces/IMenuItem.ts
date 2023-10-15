export interface IMenuItem {
  _id: string;
  name: string;
  type: IDishType;
  slug: string;
  image: string;
  description: string;
  allergens?: IAllergens[];
  minServings?: number;
  price: number;

  createdAt: string;
  updatedAt: string;
}

export type IAllergens =
  | "Gluten"
  | "Crustaceans"
  | "Eggs"
  | "Fish"
  | "Peanuts"
  | "Soy"
  | "Milk"
  | "Nuts"
  | "Celery"
  | "Mustard"
  | "Sesame"
  | "SO2"
  | "Lupin"
  | "Molluscs";

export type IDishType = "starter" | "mainDish" | "dessert";
