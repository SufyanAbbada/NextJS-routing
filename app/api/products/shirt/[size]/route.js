import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  console.log(request.url);
  console.log(Object.keys(request));

  console.log(params);
  const size = Object.toString(params.size);
  console.log(params.size);

  return NextResponse.json(
    {
      response: "You asked for" + { size } + " shirts",
    },
    { status: 302 }
  );
}
