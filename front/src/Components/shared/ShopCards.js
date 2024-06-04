import { React } from "react";
import ProductsCard from "./ProductsCard";
import { useProduct } from "./ProductContext";

const ShopCards = () => {
  const { data, types } = useProduct();

  data.map((product) => {
    data.sort((a, b) => b.number_of_sales - a.number_of_sales);
    product.index = 1;
    return product.index;
  });

  return (
    <section className="flex flex-col align-center mt-5">
      {types.map((type) => {
        return (
          <>
            <p
              key={type.type_id}
              className="mx-5 border-y border-gold p-3 my-5 md:mx-80 px-5 text-center text-2xl font-bold"
            >
              Nos {type.type_name}s
            </p>
            <article className="flex justify-center mx-auto w-12/12 flex-wrap">
              {console.log(data)}
              <ProductsCard
                type={type.type_id}
                data={data.product ? data.products : data}
                imageClassName={`rounded-3xl h-64 w-96 mx-auto my-3 `}
                cardClassName="flex flex-col mx-2"
              />
            </article>
          </>
        );
      })}
    </section>
  );
};

export default ShopCards;
