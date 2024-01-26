import CategorySelection from "../../components/categorySelection/CategorySelection";
import Layout from "../../components/layoutComponent/Layout";
import Navbar from "../../components/navbar/Navbar";
import { ReactNode } from "react";
import "./products.scss";

interface ProductViewProps {
  children?: ReactNode;
  title: string;
}

const Products = ({ children, title }: ProductViewProps) => (
  <>
    <Navbar navbarClassName="alt-view-navbar" />
    <Layout>
      <CategorySelection />
      <section className="products-container">
        <div className="circle-container">
          <div className="size-circle"></div>
        </div>
        <h1>{title}</h1>
        {children}
      </section>
    </Layout>
  </>
);

export default Products;
