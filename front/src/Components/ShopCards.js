import { React } from "react";
import ProductsCard from "./ProductsCard";
import { useProduct } from "./ProductContext";

const ShopCards = () => {
  const { data, error, types } = useProduct();

  return (
    <section className="flex flex-col align-center mt-5">
      {types.map((type) => {
        return (
          <>
            <p
              key={type.id}
              className="mx-5 border-y border-gold p-3 my-5 mx-20 px-5 text-center"
            >
              Nos {type.nom_type}s
            </p>
            <article className="flex justify-center m-auto w-11/12 flex-wrap">
              <ProductsCard
                type={type.id}
                data={data}
                error={error}
                imageClassName="rounded-3xl h-64 w-96 mx-auto my-3"
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
