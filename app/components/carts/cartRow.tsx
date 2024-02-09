//@types
import { Cart } from "@types";

//@components
import { CartInfo } from "@components/carts";
import Image from "next/image";

interface CartRowProps {
  cartInfo: Cart;
}

/**
 * Returns the cart row component
 * @param CartRowProps
 *
 * @returns JSX.Element
 */
const CartRow: React.FC<CartRowProps> = ({ cartInfo }) => {
  const firstProduct = cartInfo.products[0];

  return (
    <div className="flex flex-col space-x-4 shadow-lg md:flex-row">
      <Image
        alt={firstProduct.title}
        width={200}
        height={200}
        src={firstProduct.thumbnail}
        className="h-[200px] w-[100%] object-cover md:w-[200px]"
        quality={50}
        priority={true}
      />
      <CartInfo cartInfo={cartInfo} />
    </div>
  );
};

export default CartRow;
