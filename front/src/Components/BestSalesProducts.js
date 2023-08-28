import { React, useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";

const BestSalesProducts = () => {
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/products/productsDisplay", {
      method: "GET",
    })
      .then((response) => {
        if (!response) {
          throw new Error("Aucune information serveur");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        const sortedData = [...data];
        sortedData.sort((a, b) => b.number_of_sales - a.number_of_sales);
        setData(sortedData);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <section className="flex flex-col align-center mt-5">
      <p className="mx-5 border-x-2 border-b-2 border-gold p-3 rounded-full my-5 text-center md:mx-auto">
        Découvrez nos meileur produits, pour vous détendre en terrasse
      </p>
      <ProductsCard data={data} error={error} />
    </section>
  );
};

export default BestSalesProducts;
