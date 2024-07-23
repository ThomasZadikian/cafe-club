import { BASE_API_URL } from "../../Assets/constantes/constants";
import fetchUser from "./fetchUserServices";

const usernameVerification = async (formData) => {
  const username = formData.get("username");
  const email = formData.get("email");
  let users = [];
  if (username === null || email === null) {
    return false;
  } else {
    try {
      users = await fetchUser(formData);
      console.log("Je termine de fetch dans le insert");
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  console.log(users);
  if (users === undefined) {
    return true;
  } else {
    return false;
  }
};

export const insertUserVerification = async (formData) => {
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");
  if (await usernameVerification(formData)) {
    console.log("Je passe les vérification");
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
