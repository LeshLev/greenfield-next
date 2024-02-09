import React from "react";

//@components
import { Typography } from "@components/ui";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

interface HeaderProps {
  title: string;
}

/**
 * Returns the header component
 * @param HeaderProps
 * @returns JSX.Element
 */
const Header: React.FC<HeaderProps> = ({ title }) => (
  <header className="bg-primary-light shadow-md">
    <div className="content-container flex items-center space-x-2">
      <ShoppingBagIcon className="h-8 w-8" />
      <Typography variant="h1" className="text-2xl font-normal">
        {title}
      </Typography>
    </div>
  </header>
);

export default React.memo(Header);
