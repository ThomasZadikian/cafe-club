import React from "react";
import { useProduct } from "../../Context/ProductContext";

type ErrorDbProps = {};

const ErrorDb: React.FC<ErrorDbProps> = () => {
  const { products } = useProduct();
  return (
    <div>
      {products?.length === 0 ? (
        <p className="md:w-1/2 border border-red-900 rounded-md bg-red-900 p-2 mx-auto mt-3">
          Erreur de connexion à la base de données
        </p>
      ) : null}
    </div>
  );
};

export default ErrorDb;
