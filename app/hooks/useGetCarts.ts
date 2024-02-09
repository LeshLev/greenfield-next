// @hooks
import { useFetcher } from "@hooks";
import useSWR from "swr";
import { GetCartsResponse } from "../types";

//@types

/**
 * Get carts list
 * @returns
 */
export function useGetCarts(skip: number = 0) {
  const fetcher = useFetcher();

  return useSWR<GetCartsResponse>(`/api/carts?skip=${skip}`, fetcher, {
    refreshInterval: 30000,
  });
}

export default useGetCarts;
