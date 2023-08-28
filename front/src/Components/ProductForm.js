import React, { useEffect, useState } from "react";

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

  function handleSubmit(e) {
    e.preventDefault();
    const productData = {
      productName,
      description,
      price,
      origin,
      typeId: selectedTypeId,
    };
    fetch("http://localhost:3001/api/products/insert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi des données :", error);
      });
  }

  useEffect(() => {
    fetch("http://localhost:3001/api/products/productsType")
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

  useEffect(() => {
    fetch("http://localhost:3001/api/confirmation", {
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
    fetch("http://localhost:3001/api/products/productsDisplay", {
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
    <div className="bg-white shadow-md rounded-lg p-8 max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-6">Ajoutez un produit</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Nom du produit:
          </label>
          <input
            className="w-full border border-gray-300 px-3 py-2 rounded"
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Description:
          </label>
          <textarea
            className="w-full border border-gray-300 px-3 py-2 rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Prix:</label>
          <input
            className="w-full border border-gray-300 px-3 py-2 rounded"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Origine:
          </label>
          <input
            className="w-full border border-gray-300 px-3 py-2 rounded"
            type="text"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
          />
        </div>
        <div>
          {productsType.map((element) => (
            <label key={element.id} className="block text-gray-700 font-medium">
              <input
                type="radio"
                name="productType"
                value={element.id}
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
