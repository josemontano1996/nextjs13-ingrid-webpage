import { IMenuItem } from "@/interfaces/IMenuItem";

export const starterDishes = [
  {
    name: "Caprese Salad",
    slug: "caprese-salad",
    type: "starter",
    image:
      "https://res.cloudinary.com/dfupfbnez/image/upload/v1697290155/ingrid-chef-webpage/capresesalad_fqmr2r.jpg",
    description:
      "A classic Italian starter featuring ripe tomatoes, fresh mozzarella, basil leaves, and balsamic glaze.",
    allergens: ["Milk"],
    minServings: 1,
    price: 10,
  },
  {
    name: "Bruschetta",
    slug: "bruschetta",
    type: "starter",
    image:
      "https://res.cloudinary.com/dfupfbnez/image/upload/v1697290808/ingrid-chef-webpage/pexels-maria-orlova-4969892_j422oc.jpg",
    description:
      "Toasted bread slices topped with diced tomatoes, garlic, fresh basil, and drizzled with olive oil.",
    allergens: [],
    minServings: 2,
    price: 8,
  },
  {
    name: "Stuffed Mushrooms",
    slug: "stuffed-mushrooms",
    type: "starter",
    image:
      "https://res.cloudinary.com/dfupfbnez/image/upload/v1697290944/ingrid-chef-webpage/pexels-pixabay-262967_dsqvet.jpg",
    description:
      "Button mushrooms stuffed with a savory mixture of cream cheese, garlic, herbs, and breadcrumbs, then baked to perfection.",
    allergens: ["Milk", "Gluten"],
    minServings: 2,
    price: 9,
  },
  {
    name: "Garlic Shrimp",
    slug: "garlic-shrimp",
    type: "starter",
    image:
      "https://res.cloudinary.com/dfupfbnez/image/upload/v1697290982/ingrid-chef-webpage/pexels-dmitriy-ganin-7538076_sd6umq.jpg",
    description:
      "Succulent shrimp sautéed in garlic and butter, served with a side of dipping sauce.",
    allergens: ["Milk", "Molluscs"],
    minServings: 2,
    price: 12,
  },
];

export const mainDishes = [
  {
    name: "Lobster Thermidor",
    slug: "lobster-thermidor",
    image:
      "https://res.cloudinary.com/dfupfbnez/image/upload/v1697291026/ingrid-chef-webpage/pexels-roman-odintsov-4553378_ss5cb3.jpg",
    type: "mainDish",
    description:
      "Succulent lobster meat baked with a creamy mixture of cheese, herbs, and wine, creating a delightful main course.",
    allergens: ["Milk", "Molluscs"],
    minServings: 1,
    price: 35,
  },
  {
    name: "Filet Mignon",
    type: "mainDish",
    slug: "filet-mignon",
    image:
      "https://res.cloudinary.com/dfupfbnez/image/upload/v1697291145/ingrid-chef-webpage/pexels-pixabay-361184_yk5qbs.jpg",
    description:
      "A tender and juicy cut of beef, seasoned and cooked to perfection, served with a red wine reduction sauce.",
    allergens: [],
    minServings: 1,
    price: 40,
  },
  {
    name: "Salmon with Lemon Dill Sauce",
    type: "mainDish",
    slug: "salmon-lemon-dill",
    image:
      "https://res.cloudinary.com/dfupfbnez/image/upload/v1697291181/ingrid-chef-webpage/pexels-krisztina-papp-2374946_ybgxlt.jpg",
    description:
      "Grilled salmon fillet topped with a zesty lemon dill sauce, served with a side of roasted vegetables.",
    allergens: ["Fish"],
    minServings: 1,
    price: 25,
  },
  {
    name: "Vegetable Stir-Fry",
    type: "mainDish",
    slug: "vegetable-stir-fry",
    image:
      "https://res.cloudinary.com/dfupfbnez/image/upload/v1697291239/ingrid-chef-webpage/pexels-kleine-beyers-2181151_vaxn2c.jpg",
    description:
      "Assorted fresh vegetables stir-fried in a savory sauce, served over a bed of steamed rice.",
    allergens: ["Soy"],
    minServings: 1,
    price: 18,
  },
  {
    name: "Chicken Parmesan",
    type: "mainDish",
    slug: "chicken-parmesan",
    image:
      "https://res.cloudinary.com/dfupfbnez/image/upload/v1697291330/ingrid-chef-webpage/pexels-yanuar-putut-widjanarko-2232433_qnvr0g.jpg",
    description:
      "Breaded and fried chicken cutlet topped with marinara sauce and melted mozzarella cheese, served with spaghetti.",
    allergens: ["Milk", "Gluten"],
    minServings: 1,
    price: 22,
  },
];

export const dessertDishes = [
  {
    name: "Tiramisu",
    slug: "tiramisu",
    type: "dessert",
    image:
      "https://res.cloudinary.com/dfupfbnez/image/upload/v1697291389/ingrid-chef-webpage/pexels-anna-guerrero-4078174_asniyh.jpg",
    description:
      "A classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese, dusted with cocoa powder.",
    allergens: ["Milk", "Eggs"],
    minServings: 1,
    price: 8,
  },
  {
    name: "Cheesecake",
    slug: "cheesecake",
    type: "dessert",
    image:
      "https://res.cloudinary.com/dfupfbnez/image/upload/v1697291431/ingrid-chef-webpage/pexels-alleksana-4051674_cw5cf4.jpg",
    description:
      "A rich and creamy New York-style cheesecake with a graham cracker crust, topped with fruit compote.",
    allergens: ["Milk"],
    minServings: 1,
    price: 10,
  },
  {
    name: "Fruit Tart",
    type: "dessert",
    slug: "fruit-tart",
    image:
      "https://res.cloudinary.com/dfupfbnez/image/upload/v1697291466/ingrid-chef-webpage/pexels-anna-tukhfatullina-food-photographerstylist-2693447_oaakb9.jpg",
    description:
      "A buttery pastry crust filled with pastry cream and topped with a colorful assortment of fresh fruits.",
    allergens: ["Milk", "Gluten"],
    minServings: 1,
    price: 14,
  },
  {
    name: "Crème Brûlée",
    type: "dessert",
    slug: "creme-brulee",
    image:
      "https://res.cloudinary.com/dfupfbnez/image/upload/v1697291506/ingrid-chef-webpage/pexels-anna-tukhfatullina-food-photographerstylist-2693447_g7dyke.jpg",
    description:
      "Creamy custard with a caramelized sugar crust on top, served in a ramekin.",
    allergens: ["Milk"],
    minServings: 1,
    price: 11,
  },
];
