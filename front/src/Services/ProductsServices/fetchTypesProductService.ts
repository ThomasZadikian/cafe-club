import { BASE_API_URL } from "../../Assets/constantes/API_URL";
import { ProductType } from "../../Interface/ProductType";

export default async function fetchTypesProductService() {
  try {
    const reponse = await fetch(`${BASE_API_URL}products/products-types`, {
      method: "GET",
    });
    if (!reponse.ok) {
      throw new Error("Erreur lors de la récupération des données");
    }
    const types: ProductType[] = await reponse.json();
    return types;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des données ou des types",
      error
    );
  }
}
