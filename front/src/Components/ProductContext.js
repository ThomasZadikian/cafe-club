import React, { useContext, useState, useEffect, createContext } from "react";

const ProductContext = createContext();

export function useProduct() {
  return useContext(ProductContext);
}

export function ProductProvider({ children }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    fetch("http://localhost:3001/api/products/productsDisplay", {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          console.error(
            "Erreur lors de la récupération des données, recherche de sauvegarde locale"
          );
        } else {
          return response.json();
        }
      })
      .catch(() => {
        return require("../db/db.json");
      })
      .then((data, error) => {
        if (data.products) {
          // This case is for the .json files only
          setData(data.products);
          setError(1);
        } else {
          // This case is for the API only
          setData(data);
        }
      });
  }, []);

  return (
    <ProductContext.Provider value={{ data, error }}>
      {children}
    </ProductContext.Provider>
  );
}
