import { NextResponse } from "next/server";
import { db, seedDatabase } from "@/database";
import Product from "@/models/Product";

export async function GET() {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json(
      { msg: "You are not authorized for using this API" },
      { status: 401 },
    );
  }

  await db.connect();

  await Product.deleteMany();

  await Product.insertMany(seedDatabase.dessertDishes);
  await Product.insertMany(seedDatabase.starterDishes);
  await Product.insertMany(seedDatabase.mainDishes);

  await db.disconnect();

  return NextResponse.json({ msg: "Seed succesful" });
}
