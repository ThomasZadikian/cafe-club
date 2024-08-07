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
    const isInserted = await insertUserVerification(formData);
    console.log(isInserted);
    if (!isInserted) {
      console.log("Non insérée");
      setErrorAppear(true);
      setErrorMessage(
        "Les données fournies lors de l'inscription ne sont pas correctes."
      );
    } else {
      console.log("Inscription réussie");
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
      <h2 className="text-2xl font-semibold mb-6">Créez votre compte</h2>
      <form onSubmit={handleSubmit} className="space-y-4 ">
        <div>
          <label className="block font-medium mb-2">
            Votre nom / pseudonyme
          </label>
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
          <label className="block font-medium mb-2">Votre adresse email</label>
          <input
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            type="email"
            className="w-full border-2 border-gold px-3 py-2 rounded text-gray-900"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-2">
            Votre mot de passe (doit contenir au moins 8 caractère)
          </label>
          <input
            className="w-full border-2 border-gold px-3 py-2 rounded text-gray-900"
            type="password"
            value={password}
            pattern="(?=.*\d)(?=.*[a-z]).{8,}"
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
