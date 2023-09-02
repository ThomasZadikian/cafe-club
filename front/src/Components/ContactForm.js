import React from "react";
import InputForm from "./InputForm";

const ContactForm = () => {
  const inputClass =
    "w-full p-2 border-2 border-gold rounded-lg focus:border-gold-200 focus:border-2 focus:outline-none mb-2";

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("je suis un formulaire en construction");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-dark border border-gold rounded-lg p-8 max-w-md mx-auto mt-8"
    >
      <InputForm
        description="Entrez votre adresse mail de contact"
        name="email"
        inputType="text"
        className={inputClass}
      />
      <InputForm
        description="Entrez votre prénom"
        name="firstName"
        inputType="text"
        className={inputClass}
      />
      <InputForm
        description="Entrez votre nom"
        name="lastName"
        inputType="text"
        className={inputClass}
      />
      <InputForm
        description="Entez votre message"
        name="message"
        inputType="textarea"
        className={inputClass}
      />

      <button
        className=" mt-5 bg-gold hover:bg-green-500 text-white py-2 px-4 rounded-full"
        type="submit"
      >
        Envoyer votre message
      </button>
    </form>
  );
};

export default ContactForm;
