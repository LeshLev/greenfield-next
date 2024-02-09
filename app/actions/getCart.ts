"use server";

import { cache } from "react";

//@types
import { Cart, GetCartResponse } from "@types";

export const getCart = cache(async (id: string) => {
  const result: GetCartResponse = {
    cart: null,
    error: null,
  };

  try {
    const res = await fetch(`https://dummyjson.com/carts/${id}`);

    if (!res.ok) {
      throw new Error(`Cart not found with id ${id}`);
    }

    result.cart = (await res.json()) as Cart;
  } catch (error) {
    if (error instanceof Error) {
      result.error = error.message;
    } else {
      result.error === "Error fetching cart info";
    }
  }

  return result;
});
