import React, { useContext, useState, useEffect, createContext } from "react";
import { BASE_API_URL } from "../../Assets/constantes/API_URL";

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
        const reponse = await fetch(`${BASE_API_URL}products/productsDisplay`);
        if (!reponse.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }
        const data = await reponse.json();
        setData(data);

        const reponseType = await fetch(`${BASE_API_URL}products/productsType`);
        if (!reponseType.ok) {
          throw new Error(
            "Erreur lors de la récupération des types de produits"
          );
        }
        const types = await reponseType.json();
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
