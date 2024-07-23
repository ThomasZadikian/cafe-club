import React, { useContext, useState, useEffect, createContext } from "react";
import { BASE_API_URL } from "../../Assets/constantes/constants";

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
          `${BASE_API_URL}products/productsDisplay`
        );
        if (!fetchAllProducts.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }
        const data = await fetchAllProducts.json();
        setData(data);

        const fetchAllTypes = await fetch(
          `${BASE_API_URL}products/productsType`
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
