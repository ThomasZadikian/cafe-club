import React, { useContext, useState, useEffect, createContext } from "react";

const ProductContext = createContext();

export function useProduct() {
  return useContext(ProductContext);
}

export function ProductProvider({ children }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [types, setTypes] = useState([]);

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

    promise2
      .then((response) => {
        if (!response) {
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
      .then((types, error) => {
        if (types.types) {
          // This case is for the .json files only
          setTypes(types.types);
          setError(1);
        } else {
          // This case is for the API only
          setTypes(types);
        }
      });
  }, []);

  return (
    <ProductContext.Provider value={{ data, error, types }}>
      {children}
    </ProductContext.Provider>
  );
}
