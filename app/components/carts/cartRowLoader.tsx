import ContentLoader from "react-content-loader";

/**
 * Returns the cart row loader component
 * @returns JSX.Element
 */
const CartRowLoader = () => (
  <ContentLoader
    height={200}
    speed={1}
    viewBox="0 0 340 200"
    className="flex space-x-4"
  >
    <rect x="0" y="0" rx="16" ry="16" width="340" height="200" />
  </ContentLoader>
);

export default CartRowLoader;
