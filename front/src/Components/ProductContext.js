import React, { useContext, useState, useEffect, createContext } from "react";

const ProductContext = createContext();

export function useProduct() {
  return useContext(ProductContext);
}

export function ProductProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/products/productsDisplay", {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          console.error(
            "Erreur lors de la récupération des données, recherche de sauvegarde locale"
          );
        }
        return response.json();
      })
      .catch(() => {
        console.error(
          "Erreur lors de la récupération des données, recherche de sauvegarde locale"
        );
        return require("../db/db.json");
      })
      .then((data) => {
        if (data.products) {
          setData(data.products);
          console.log("Données récupérées depuis la sauvegarde locale");
        } else {
          setData(data);
          console.log("Données récupérées depuis la base de données");
        }
      });
  }, []);

  return (
    <ProductContext.Provider value={{ data }}>
      {children}
    </ProductContext.Provider>
  );
}
