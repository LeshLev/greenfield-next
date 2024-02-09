"use client";
import React from "react";

// @types
import { Cart } from "@types";

// @components
import { CartRow, CartRowLoader } from "@components/carts";
import { motion } from "framer-motion";
import Link from "next/link";

interface CartsListProps {
  carts: Cart[];
  isLoading: boolean;
}
const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
};

/**
 * Returns the article cart component
 * @param CartsListProps
 * @returns JSX.Element
 */

const CartsList: React.FC<CartsListProps> = ({ carts, isLoading }) => (
  <div className="w-full overflow-x-auto py-2">
    {isLoading ? (
      <div className="grid-wrapper">
        {Array(24)
          .fill(null)
          .map((_, i) => (
            <CartRowLoader key={i} />
          ))}
      </div>
    ) : (
      <motion.div
        variants={variants}
        initial="hidden"
        animate="enter"
        className="grid-wrapper"
        transition={{ type: "linear" }}
      >
        {carts.map((cartInfo) => (
          <Link
            key={cartInfo.id}
            href={`/cart/${cartInfo.id}`}
            className="transition-all duration-500 hover:scale-[102%]"
          >
            <CartRow cartInfo={cartInfo} />
          </Link>
        ))}
      </motion.div>
    )}
  </div>
);

export default CartsList;
