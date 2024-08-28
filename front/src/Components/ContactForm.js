import InputForm from "./InputForm";
import React, { Component } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const ContactForm = () => {
  const inputClass =
    "w-full p-2 border-2 border-gold rounded-lg focus:border-gold-200 focus:border-2 focus:outline-none mb-2";

  async function handleSubmit(e) {
    e.preventDefault();
  }

  const position = [51.505, -0.09];

  return (
    <div>
      <div className="bg-dark border border-gold rounded-lg p-8 max-w-md mx-auto mt-8">
        <h2>Nous sommes ici : (position fictive)</h2>
        <div>
          <MapContainer
            center={position}
            zoom={25}
            style={{ width: "100%", height: "calc(50vh - 4rem)" }}
          >
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                <p>Votre café club préféré</p>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
        <p>Café club</p>
        <p>23 Rue fictive</p>
        <p>157452, Ville fictive</p>
      </div>
      <div>
        <form
          onSubmit={handleSubmit}
          className="bg-dark border border-gold rounded-lg p-8 max-w-md mx-auto mt-8"
        >
          <h2 className="my-5">
            Une remarque, suggestion ou recommendation ? Nous sommes toujours à
            votre écoute
          </h2>
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
            Envoyez votre message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
