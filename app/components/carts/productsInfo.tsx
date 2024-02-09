import React from "react";

//@types
import { Product } from "@types";

//@components
import { Typography } from "@components/ui";
import Image from "next/image";

interface ProductsInfoProps {
  products: Product[];
}

/**
 * Returns the product info component
 * @param ProductsInfoProps
 *
 * @returns JSX.Element
 */
const ProductsInfo: React.FC<ProductsInfoProps> = ({ products }) => (
  <div className="flex max-w-full flex-shrink-0 flex-row gap-4 overflow-scroll">
    {products.map((product) => (
      <div key={product.id} className="flex flex-shrink-0 flex-col space-x-2">
        <Image
          alt={product.title}
          width={200}
          height={200}
          src={product.thumbnail}
          className="h-[200px] object-cover"
          quality={50}
          priority={true}
        />
        <Typography
          variant="p"
          className="mb-4 max-w-[200px] truncate text-center"
          title={product.title}
        >
          {product.title}
        </Typography>
      </div>
    ))}
  </div>
);

export default ProductsInfo;
