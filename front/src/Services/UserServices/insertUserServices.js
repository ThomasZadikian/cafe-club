import { BASE_API_URL } from "../../Assets/constantes/constants";

let users = [];

const usernameVerification = async (formData) => {
  const username = formData.get("username");
  const email = formData.get("email");
  if (username === null || email === null) {
    return false;
  } else {
    try {
      const response = await fetch(`${BASE_API_URL}users/fetch`, {
        method: "GET",
      });
      if (response.ok) {
        users = await response.json();
      } else {
        console.error(
          "Erreur lors de l'envoi des données :",
          response.statusText
        );
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des utilisateurs" + error);
    }
    return !users.some(
      (user) => user.username === username || user.email === email
    );
  }
};

export const insertUserVerification = async (formData) => {
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");
  if (await usernameVerification(formData)) {
    try {
      const response = await fetch(`${BASE_API_URL}users/insert`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      });
      if (response.ok) {
        console.log("Ca fonctionne");
      } else {
        console.log("Non fonctionnel");
      }
    } catch {
      console.log(
        "Erreur lors de la conection à la base de donnée insert user verification"
      );
    }
  } else {
    return console.error("Certaines informations sont erronées.");
  }
};
export default insertUserVerification;
