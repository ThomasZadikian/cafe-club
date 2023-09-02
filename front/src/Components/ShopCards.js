import { React, useState, useEffect } from "react";
import ProductsCard from "./ProductsCard";

const ShopCards = () => {
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const promise1 = fetch(
      "http://localhost:3001/api/products/productsDisplay",
      { method: "GET" }
    );
    const promise2 = fetch("http://localhost:3001/api/products/productsType", {
      method: "GET",
    });

    promise1
      .then((response) => {
        if (!response) {
          throw new Error("Aucune information serveur");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        const sortedData = [...data];
        sortedData.sort((a, b) => b.id_type - a.id_type);
        setData(sortedData);
      })
      .catch((error) => {
        setError(error);
        throw new Error(error);
      });

    promise2
      .then((response) => {
        if (!response) {
          throw new Error("Aucune information serveur");
        }
        return response.json();
      })
      .then((types) => {
        setTypes(types);
      })
      .catch((error) => {
        setError(error);
        throw new Error(error);
      });
  }, []);

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
