import { NextResponse } from "next/server";
import sequelize from "../../lib/sequelize";

export async function GET(request) {
  console.log(request.url);

  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }

  return NextResponse.json({ res: "Welcome" });
}
