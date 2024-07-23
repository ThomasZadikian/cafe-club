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
    console.log(users);
    if (users?.length === 0) {
      return true;
    } else {
      return false;
    }
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
      if (!response.ok) {
        console.log("faux");
        return false;
      } else {
        console.log("User created successfully!");
      }
    } catch (error) {
      console.log("faux");
      return false;
    }
  } else {
    console.log("faux");
    return false;
  }
};

export default insertUserVerification;
