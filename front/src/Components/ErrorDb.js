import React from "react";
import { useProduct } from "./ProductContext";

const ErrorDb = () => {
  const { errorLocal } = useProduct();
  return (
    <div>
      {errorLocal ? (
        <p className="md:w-1/2 border border-red-900 rounded-md bg-red-900 p-2 mx-auto mt-3">
          Vous utilisez une version locale de la base de données, les données
          pourraient ne pas correspondre parfaitement à ce qui est attendu.
        </p>
      ) : null}
    </div>
  );
};

export default ErrorDb;
