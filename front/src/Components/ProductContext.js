import React, { useContext, useState, useEffect, createContext } from "react";

const ProductContext = createContext();

export function useProduct() {
  return useContext(ProductContext);
}

export function ProductProvider({ children }) {
  const [data, setData] = useState([]);
  const [errorLocal, seterrorLocal] = useState();
  const [types, setTypes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/products/productsDisplay", {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          console.errorLocal(
            "Erreur lors de la récupération des données, recherche de sauvegarde locale"
          );
        } else {
          return response.json();
        }
      })
      .catch(() => {
        return require("../db/db.json");
      })
      .then((data, errorLocal) => {
        if (data.products) {
          // This case is for the .json files only
          setData(data.products);
          seterrorLocal(1);
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
          console.errorLocal(
            "Erreur lors de la récupération des données, recherche de sauvegarde locale"
          );
        } else {
          return response.json();
        }
      })
      .catch(() => {
        return require("../db/db.json");
      })
      .then((data, errorLocal) => {
        if (data.products) {
          // This case is for the .json files only
          setData(data.products);
          seterrorLocal(1);
        } else {
          // This case is for the API only
          setData(data);
        }
      });

    promise2
      .then((response) => {
        if (!response) {
          console.errorLocal(
            "Erreur lors de la récupération des données, recherche de sauvegarde locale"
          );
        } else {
          return response.json();
        }
      })
      .catch(() => {
        return require("../db/db.json");
      })
      .then((types, errorLocal) => {
        if (types.types) {
          // This case is for the .json files only
          setTypes(types.types);
          seterrorLocal(1);
        } else {
          // This case is for the API only
          setTypes(types);
        }
      });
  }, []);

  return (
    <ProductContext.Provider value={{ data, errorLocal, types }}>
      {children}
    </ProductContext.Provider>
  );
}
