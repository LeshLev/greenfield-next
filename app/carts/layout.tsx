//@styles
import "@styles";
import "react-toastify/dist/ReactToastify.css";

//@components
import { Header } from "@components";

//@types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Greenfield carts list",
  description: "Greenfield carts list page",
};

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Header title="Carts list" />
    <main className="content-container content-wrapper bg-primary-light">
      {children}
    </main>
  </>
);

export default Layout;
