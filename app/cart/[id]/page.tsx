//@actions
import { getCart } from "@actions";

//@components
// import { CartContent } from "@components/cart";
import { CartInfo, ProductsInfo } from "@components/carts";
import { ContentNotFound, ErrorMessage, Typography } from "@components/ui";

interface CartPageProps {
  params: {
    id: string;
  };
}

/**
 * Returns the article page component
 * @returns JSX.Element
 */
const CartPage = async ({ params: { id } }: CartPageProps) => {
  const cartInfo = await getCart(id);

  return (
    <section className="flex flex-col space-y-2 px-4">
      {cartInfo.error ? (
        <ErrorMessage error={cartInfo.error} />
      ) : cartInfo.cart ? (
        <div>
          <Typography variant="p" className="font-medium">
            General info:
          </Typography>
          <CartInfo cartInfo={cartInfo.cart} />
          <ProductsInfo products={cartInfo.cart.products} />
        </div>
      ) : (
        <ContentNotFound message={`There is no content for cart #${id}`} />
      )}
    </section>
  );
};

export default CartPage;
