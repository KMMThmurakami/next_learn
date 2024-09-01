import { NextRequest, NextResponse } from "next/server";

// srcディレクトリ直下に置く
export const middleware = (request: NextRequest) => {
  console.log("ミドルウェア");

  return NextResponse.next();
};

export const config = {
  matcher: ["/", "/task"],
};
