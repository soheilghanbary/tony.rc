import { ReactNode } from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Provider from "./theme-provider";

type Props = {
  children: ReactNode;
};

export default function LayoutContent({ children }: Props) {
  return (
    <Provider>
      <Navbar />
      <section className="container mx-auto">{children}</section>
      <Footer />
      <Sidebar />
    </Provider>
  );
}
