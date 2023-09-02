import { React } from "react";
import CartIcons from "./CartIcons";

const ProductsCard = ({ data, imageClassName, cardClassName, type }) => {
  return (
    <>
      {data.map((product) => {
        const image = require("../Assets/Images/" +
          product.product_name +
          ".jpg");
        if (type !== product.id_type && type !== "all") {
          return null;
        } else {
          return (
            <div
              key={product.id}
              className={`${cardClassName} ${
                product.index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <img
                src={image}
                alt={`Exemple de ${product.product_name}`}
                className={imageClassName}
              />
              <article className="flex flex-col items-center justify-start md:w-96 md:h-96 border-2 border-gold rounded-3xl my-3 mx-5">
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
