import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import fetchProductsServivces from "../Services/ProductsServices/fetchProductsServivces";
import fetchProductTypesService from "../Services/ProductsServices/fetchTypesProductService";
import { Product, ProductContextType } from "../Interface/Products";
import { ProductType } from "../Interface/ProductType";

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[] | undefined>([]);
  const [productTypes, setProductTypes] = useState<ProductType[] | undefined>(
    []
  );

  useEffect(() => {
    const initializeData = async () => {
      const fetchedProducts: Product[] | undefined =
        await fetchProductsServivces();
      const fetchedProductTypes: ProductType[] | undefined =
        await fetchProductTypesService();
      setProducts(fetchedProducts);
      setProductTypes(fetchedProductTypes);
    };

    initializeData();
  }, []);

  return (
    <ProductContext.Provider
      value={{ products, setProducts, productTypes, setProductTypes }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = (): ProductContextType => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProduct must be used within a ProductProvider");
  }
  return context;
};
