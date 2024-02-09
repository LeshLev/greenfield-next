//@types
import { GetCartsResponse } from "@types";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const skipCount = Number(searchParams.get("skip") || 0);

  const result: GetCartsResponse = {
    cartsInfo: null,
    error: null,
  };

  try {
    const res = await fetch(`https://dummyjson.com/carts?${skipCount}`);

    if (!res.ok) {
      throw new Error(`Cannot get carts info`);
    }

    result.cartsInfo = await res.json();
  } catch (error) {
    if (error instanceof Error) {
      result.error = error.message;
    } else {
      result.error === "Error fetching carts info";
    }
  }

  return new Response(JSON.stringify(result));
}
