import React from "react";
import { useProduct } from "./ProductContext";
import { useTranslation } from "react-i18next";

type ErrorDbProps = {};

const ErrorDb: React.FC<ErrorDbProps> = () => {
  const { t } = useTranslation("fr");
  const { errorLocal } = useProduct();
  return (
    <div>
      {errorLocal ? (
        <p className="md:w-1/2 border border-red-900 rounded-md bg-red-900 p-2 mx-auto mt-3">
          {t("components.shared.noDataBase")}
        </p>
      ) : null}
    </div>
  );
};

export default ErrorDb;
