import React from "react";
import CartIcons from "./CartIcons";
import { Product } from "../../Interface/Products";
import { ProductType } from "../../Interface/ProductType";

type ProductsCardProps = {
  data: Product[];
  imageClassName: string;
  cardClassName: string;
  type: ProductType["type_id"] | string;
};

const ProductsCard: React.FC<ProductsCardProps> = ({
  data,
  imageClassName,
  cardClassName,
  type,
}) => {
  return (
    <>
      {data.map((product, index) => {
        if (type !== product.id_type && type !== "all") {
          return null;
        } else {
          return (
            <div
              key={index}
              className={`${cardClassName}`}
            >
              <img
                src={product.image}
                alt={`Exemple de ${product.product_name}`}
                className={imageClassName}
              />
              <article
                key={product.id_type}
                className="flex flex-col items-center justify-start md:w-96 md:h-96 border-2 border-gold rounded-3xl my-3 mx-5"
              >
                <h1 className="my-3 text-xl font-bold border-b-2 border-gold p-2">
                  {product.product_name}
                </h1>
                <p className="m-3 text-justify mt-auto">
                  {product.description}
                </p>
                <p className="my-3 mt-auto">Origine : {product.origin}</p>
                <p className="my-3 flex px-4 mt-auto">
                  <CartIcons height={"28"} width={"28"} fill={"white"} />
                  {product.price} €
                </p>
              </article>
            </div>
          );
        }
      })}
    </>
  );
};

export default ProductsCard;
