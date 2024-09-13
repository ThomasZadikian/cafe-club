import { React } from "react";
import ProductsCard from "./ProductsCard";
import { useProduct } from "./ProductContext";
import { Product } from "../../Interface/Products";

type BestSalesProductsProps = {};

const BestSalesProducts: React.FC<BestSalesProductsProps> = () => {
  const { data } = useProduct();
  const sortedData = [...data].sort(
    (a, b) => b.number_of_sales - a.number_of_sales
  );

  sortedData.forEach((product: Product, index: number) => {
    product.index = index;
  });

  return (
    <section className="flex flex-col align-center mt-5">
      <p className="mx-5 border-x-2 border-b-2 border-gold p-3 rounded-full my-5 text-center md:mx-auto">
        Découvrez nos meileur produits, pour vous détendre en terrasse
      </p>
      <ProductsCard
        type="all"
        data={data.product ? data.products : data}
        imageClassName={`rounded-3xl md:w-1/3 md:h-96 w-11/12 h-64 mx-5 my-3 `}
        cardClassName={`mx-2 md:flex md:justify-center `}
      />
    </section>
  );
};

export default BestSalesProducts;
