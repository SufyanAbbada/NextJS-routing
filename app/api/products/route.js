import { NextResponse } from "next/server";

export async function GET(request) {
  // console.log(request.url);
  let products = ["iPhone 12", "Polo Shirt", "Dell Laptop", "Makeup"];
  return NextResponse.json({ products: products });
}
