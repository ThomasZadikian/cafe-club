import React, { useContext, useState, useEffect, createContext } from "react";

const ProductContext = createContext();

export function useProduct() {
  return useContext(ProductContext);
}

export function ProductProvider({ children }) {
  const [data, setData] = useState([]);
  const [errorLocal, setErrorLocal] = useState();
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchAllProducts = await fetch(
          "http://localhost:8080/api/products/productsDisplay"
        );
        if (!fetchAllProducts.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }
        const data = await fetchAllProducts.json();
        setData(data);

        const fetchAllTypes = await fetch(
          "http://localhost:8080/api/products/productsType"
        );
        if (!fetchAllTypes.ok) {
          throw new Error(
            "Erreur lors de la récupération des types de produits"
          );
        }
        const types = await fetchAllTypes.json();
        setTypes(types);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données ou des types",
          error
        );

        // Load the local json files if necessary
        try {
          const localData = await import("../db/db.json");
          setData(localData.products);
          setTypes(localData.types);
          setErrorLocal(1);
        } catch (error) {
          console.error("Erreur lors du chargement des données locales", error);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <ProductContext.Provider
      value={errorLocal ? { data, errorLocal, types } : { data, types }}
    >
      {children}
    </ProductContext.Provider>
  );
}
