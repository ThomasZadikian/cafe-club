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
    } catch (error) {
      return false;
    }
    if (users?.length === 0 || users === undefined) {
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
        return false;
      }
    } catch (error) {
      return false;
    }
  } else {
    return false;
  }
};

export default insertUserVerification;
