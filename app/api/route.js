import { NextResponse } from "next/server";
import sequelize from "../../lib/sequelize";

export async function GET(request) {
  return NextResponse.json({ res: "Welcome" });
}
