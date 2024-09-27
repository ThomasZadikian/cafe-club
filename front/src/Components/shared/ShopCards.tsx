import React from "react";
import { Product } from "../../Interface/Products";
import ProductsCard from "./ProductsCard";
import { useProduct } from "../../Context/ProductContext";

type ShopCardsProps = {};

const ShopCards: React.FC<ShopCardsProps> = () => {
  const { products, productTypes } = useProduct();

  if (!products || !productTypes) {
    return <p>Chargement...</p>;
  }

  // Grouper les produits par type
  const productsByType = productTypes.map((type) => ({
    type,
    products: products.filter((product) => product.id_type === type.type_id),
  }));

  return (
    <section className="flex flex-col align-center mt-5">
      {productsByType.map(({ type, products }) => (
        <div key={type.type_id}>
          <p className="mx-5 border-y border-gold p-3 my-5 md:mx-80 px-5 text-center text-2xl font-bold">
            Nos {type.type_name}s
          </p>
          <article className="flex justify-center mx-auto w-12/12 flex-wrap">
            <ProductsCard
              type={type.type_id}
              data={products}
              imageClassName={`rounded-3xl h-64 w-96 mx-auto my-3`}
              cardClassName="flex flex-col mx-2"
            />
          </article>
        </div>
      ))}
    </section>
  );
};

export default ShopCards;
