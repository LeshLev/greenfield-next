//@styles
import "@styles";
import { Roboto } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";

//@components
import { ToastWrapper } from "@components/ui";

//@types
import type { Metadata } from "next";

const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Greenfield App",
  icons: {
    icon: ["/favicon.ico?v=4"],
  },
  description: "Fancy Next.js application for Greenfield",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => (
  <html lang="en">
    <body className={roboto.className}>
      <ToastWrapper />
      <div className="mx-auto h-screen bg-primary-light">{children}</div>
    </body>
  </html>
);

export default RootLayout;
