import { NextResponse } from "next/server";
import { db } from "@/database";
import Product from "@/models/Product";

export async function GET() {
  await db.connect();
  const products = await Product.find().lean();
  await db.disconnect();

  return NextResponse.json(products, { status: 200 });
}
