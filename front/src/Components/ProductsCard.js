import { React } from "react";
import CartIcons from "./CartIcons";

const ProductsCard = ({ data, error }) => {
  data.forEach((product, index) => {
    product.order = index + 1;
  });
  return (
    <>
      {error ? (
        <p className="border border-red-900 rounded-md bg-red-900 p-2">
          Erreur lors de la récupération des données, merci de contacter un
          adminstrateur
        </p>
      ) : null}
      {data.map((product) => {
        console.log(product);
        const image = require("../Assets/Images/" +
          product.product_name +
          ".jpg");
        return (
          <div
            key={product.id}
            className={`mx-2 md:flex md:justify-center ${
              product.order % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <img
              src={image}
              alt={`Exemple de ${product.product_name}`}
              className="rounded-3xl md:w-1/3 md:h-96 w-11/12 h-64 mx-5 my-3"
            />
            <article className="flex flex-col items-center justify-center md:w-96 md:h-96 border-2 border-gold rounded-3xl my-3 mx-5">
              <h1 className="my-3 text-2xl font-bold border-y-2 border-gold p-2">
                {product.product_name}
              </h1>
              <p className="m-3 text-justify">{product.description}</p>
              <p className="my-3">Origine : {product.origin}</p>
              <p className="my-3 flex px-4">
                <CartIcons height={"28"} width={"28"} fill={"white"} />
                {product.price} €
              </p>
            </article>
          </div>
        );
      })}
    </>
  );
};

export default ProductsCard;
