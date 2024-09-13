import { ProductType } from "./ProductType";

export interface Product {
  product_id: number;
  product_name: string;
  description: string;
  price: number;
  origin: string;
  number_of_sales: number;
  image: string;
  id_type: ProductType["type_id"];
  index?: number;
}

export interface ProductContextType {
  products: Product[] | undefined;
  setProducts: React.Dispatch<React.SetStateAction<Product[] | undefined>>;
  productTypes: ProductType[] | undefined;
  setProductTypes: React.Dispatch<
    React.SetStateAction<ProductType[] | undefined>
  >;
}

export interface ProductWithType extends Product {}
