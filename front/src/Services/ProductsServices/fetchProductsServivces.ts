import { BASE_API_URL } from "../../Assets/constantes/API_URL";
import { Product } from "../../Interface/Products";

export default async function fetchProductsServivces() {
  try {
    const reponse = await fetch(`${BASE_API_URL}products/products-display`, {
      method: "GET",
    });
    if (!reponse.ok) {
      throw new Error("Erreur lors de la récupération des données");
    }
    const product: Product[] = await reponse.json();
    return product;
  } catch (error) {
    console.error("Erreur lors de la récupération des produits", error);
  }
}
