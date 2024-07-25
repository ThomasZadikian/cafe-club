import { BASE_API_URL } from "../../Assets/constantes/API_URL";
import fetchUser from "./fetchUserServices";

const usernameVerification = async (formData) => {
  const username = formData.get("username");
  const email = formData.get("email");

  if (!username || !email) return false;

  try {
    const users = await fetchUser(formData);
    return !(users && users.length > 0);
  } catch (error) {
    return false;
  }
};

export const insertUserVerification = async (formData) => {
  const [username, email, password] = ["username", "email", "password"].map(
    (key) => formData.get(key)
  );

  if (!(await usernameVerification(formData))) return false;

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
    return !!response.ok;
  } catch (error) {
    return false;
  }
};

export default insertUserVerification;
