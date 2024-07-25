import React, { useEffect, useState } from "react";
import { BASE_API_URL } from "../Assets/constantes/API_URL";

const ProductForm = () => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [origin, setOrigin] = useState("");
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [selectedTypeId, setSelectedTypeId] = useState(null);
  const [productsType, setProductsType] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();

    const productData = {
      productName,
      description,
      price,
      origin,
      typeId: selectedTypeId,
    };

    // Send the data into the database
    try {
      const response = await fetch(`${BASE_API_URL}products/insert`, {
        method: "POST",
        body: productData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message);
      } else {
        console.error(
          "Erreur lors de l'envoi des données :",
          response.statusText
        );
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi des données :", error);
    }
  }

  // Retrieve the data for the product type
  useEffect(() => {
    fetch(`${BASE_API_URL}products/productsTypes`)
      .then((response) => response.json())
      .then((data) => {
        setProductsType(data);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des données de types de produits"
        );
      });
  }, []);

  // Confirm the push inside the database
  useEffect(() => {
    fetch(`${BASE_API_URL}confirmation`, {
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Aucune information serveur");
        }
        return response.json();
      })
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  useEffect(() => {
    fetch(`${BASE_API_URL}products/productsDisplay`, {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Impossible de récupérer les informations produits");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    <div className="bg-dark border border-gold rounded-lg p-8 max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-6">
        Formulaire d'ajout de produit
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4 ">
        <div>
          <label className="block font-medium mb-2">Nom du produit:</label>
          <input
            className="w-full border-2 border-gold px-3 py-2 rounded text-gray-900"
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-2">Description:</label>
          <textarea
            className="w-full border-2 border-gold px-3 py-2 rounded text-gray-900"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label className="block font-medium mb-2">Prix:</label>
          <input
            className="w-full border-2 border-gold px-3 py-2 rounded text-gray-900"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label className="block font-medium mb-2">Origine:</label>
          <input
            className="w-full border-2 border-gold px-3 py-2 rounded text-gray-900"
            type="text"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
          />
        </div>
        <div>
          <label className="block font-medium mb-2">Type de produit:</label>
          {productsType.map((element) => (
            <label key={element.id} className="block font-medium">
              <input
                type="radio"
                name="productType"
                value={element.id}
                className="mr-2"
                onChange={() => setSelectedTypeId(element.id)}
              />
              {element.nom_type}
            </label>
          ))}
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full"
          type="submit"
        >
          Ajouter l'objet en base de donnée
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
