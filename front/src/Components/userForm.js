import React, { useState } from "react";
import { insertUserVerification } from "../Services/UserServices/insertUserServices";
import ErrorMessage from "./shared/ErrorMessage";

const UserForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorAppear, setErrorAppear] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    if (insertUserVerification(formData)) {
      setErrorAppear(true);
      setErrorMessage(
        "Les données fournies lors de l'inscription ne sont pas correctes."
      );
    }
  }

  if (errorAppear === true) {
    setTimeout(() => {
      setErrorAppear(false);
    }, 3000);
  }

  return (
    <div className="bg-dark border border-gold rounded-lg p-8 max-w-md mx-auto mt-8">
      {errorAppear ? (
        <ErrorMessage message={errorMessage} error={errorAppear} />
      ) : null}
      <h2 className="text-2xl font-semibold mb-6">
        Formulaire d'ajout d'utilisateur
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4 ">
        <div>
          <label className="block font-medium mb-2">Nom de l'utilisateur</label>
          <input
            className="w-full border-2 border-gold px-3 py-2 rounded text-gray-900"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            pattern="^[a-zA-Z0-9À-ÿ]*$"
          />
        </div>
        <div>
          <label className="block font-medium mb-2">Adresse e-mail:</label>
          <input
            className="w-full border-2 border-gold px-3 py-2 rounded text-gray-900"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="block font-medium mb-2">Mot de passe</label>
          <input
            className="w-full border-2 border-gold px-3 py-2 rounded text-gray-900"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full"
          type="submit"
        >
          Ajouter l'utilisateur en base de donnée
        </button>
      </form>
    </div>
  );
};

export default UserForm;
