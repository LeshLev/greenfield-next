"use client";

//@hooks
import { useGetCarts } from "@hooks";

//@components
import { CartsList } from "@components/carts";
import { ContentNotFound, ErrorMessage } from "@components/ui";

/**
 * Returns the Carts page component
 * @returns JSX.Element
 */
const CartsPage = () => {
  const { data, error, isLoading } = useGetCarts();

  const cartsInfo = data?.cartsInfo?.carts ?? [];

  return (
    <div className="space-y-4">
      {error?.message ? (
        <ErrorMessage error={error.message} />
      ) : cartsInfo.length === 0 && !isLoading ? (
        <ContentNotFound message="Articles not found!" />
      ) : (
        <>
          <CartsList carts={cartsInfo} isLoading={isLoading} />
        </>
      )}
    </div>
  );
};

export default CartsPage;
