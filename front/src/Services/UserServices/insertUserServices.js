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
  return !users;
};

export const insertUserVerification = async (formData) => {
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");
  if (await usernameVerification(formData)) {
    try {
      await fetch(`${BASE_API_URL}users/insert`, {
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
    } catch {
      return console.error("Erreur lors de la conection à la base de donnée");
    }
  } else {
    return console.error("Certaines informations sont erronées.");
  }
};

export default insertUserVerification;
