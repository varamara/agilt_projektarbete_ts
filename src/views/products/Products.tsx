import Layout from "../../components/layoutComponent/Layout";
import Navbar from "../../components/navbar/Navbar";
import { ReactNode } from "react";

interface ProductViewProps {
  children?: ReactNode;
}

const Products = ({ children }: ProductViewProps) => (
  <>
    <Navbar navbarClassName="alt-view-navbar" />
    <Layout>
      <h1>hej</h1>
      <div className="container">
        {children}
      </div>
    </Layout>
  </>
);

export default Products;
