import { NextResponse } from "next/server";

export async function GET(request) {
  console.log(request.url);
  return NextResponse.json({ res: "You are onn the Products Route" });
}