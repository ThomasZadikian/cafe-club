import { React } from "react";
import ProductsCard from "./ProductsCard";
import { useProduct } from "./ProductContext";

const BestSalesProducts = () => {
  const { data } = useProduct();

  data.map((product) => {
    data.sort((a, b) => b.number_of_sales - a.number_of_sales);
    product.index = data.indexOf(product);
    return product.index;
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
