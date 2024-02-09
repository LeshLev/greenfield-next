//@types
import { Cart } from "@types";

//@components
import {
  ClipboardDocumentIcon,
  CurrencyDollarIcon,
  ShoppingCartIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { Typography } from "../ui";

interface CartInfoProps {
  cartInfo: Cart;
}

/**
 * Returns the cart info component
 * @param CartInfoProps
 *
 * @returns JSX.Element
 */
const CartInfo: React.FC<CartInfoProps> = ({
  cartInfo: { id, totalProducts, userId, discountedTotal },
}) => {
  const dataList = [
    {
      Icon: ShoppingCartIcon,
      label: `Cart #${id}`,
    },
    {
      Icon: ClipboardDocumentIcon,
      label: `Products: ${totalProducts}`,
    },
    {
      Icon: UserCircleIcon,
      label: `User id: ${userId}`,
    },
    {
      Icon: CurrencyDollarIcon,
      label: `Discounted: ${discountedTotal}`,
    },
  ];

  return (
    <div className="flex flex-col space-y-2 p-2">
      {dataList.map(({ label, Icon }) => (
        <div className="flex items-center space-x-2" key={label}>
          <Icon className="h-5 w-5" />
          <Typography variant="p">{label}</Typography>
        </div>
      ))}
    </div>
  );
};

export default CartInfo;
