import { NextResponse } from "next/server";

export async function GET(request) {
  let products = ["iPhone 12", "Polo Shirt", "Dell Laptop", "Makeup"];
  return NextResponse.json({ products: products });
}
