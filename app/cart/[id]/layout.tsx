//@styles
import "@styles";
import "react-toastify/dist/ReactToastify.css";

//@components
import { Header } from "@components";
import { BackLink } from "@components/ui";

//@actions
import { getCart } from "@actions";

//@types
import { Metadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { cart } = await getCart(params.id);

  if (!cart) {
    return {
      title: `Error to get cart #${params.id}`,
    };
  }

  return {
    title: `Cart info: #${cart?.id || params.id}`,
  };
}

type LayoutProps = {
  children: React.ReactNode;
  params: {
    id: string;
  };
};

const Layout: React.FC<LayoutProps> = ({ params, children }) => (
  <>
    <Header title={`Card info #${params.id}`} />
    <div className="content-container">
      <div className="mt-2 w-[112px] rounded-xl bg-white p-2 shadow-md">
        <BackLink url="/" />
      </div>
      <div className="content-wrapper relative">{children}</div>
    </div>
  </>
);

export default Layout;
