import React from "react";

const ContactForm = () => {
  async function handleSubmit(e) {
    e.preventDefault();
    console.log("je suis un formulaire en construction");
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-dark border border-gold rounded-lg p-8 max-w-md mx-auto mt-8"
    >
      <p>Je suis un formulaire en cosntruction </p>
      <button
        className="bg-gold hover:bg-green-500 text-white py-2 px-4 rounded-full"
        type="submit"
      >
        Envoyer votre message
      </button>
    </form>
  );
};

export default ContactForm;
