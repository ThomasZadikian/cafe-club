import { BASE_API_URL } from "../../Assets/constantes/constants";

export default async function fetchUser(formData) {
  const username = formData.get("username");
  const email = formData.get("email");
  try {
    const response = await fetch(`${BASE_API_URL}users/fetchUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
      }),
    });
    if (!response.ok) {
      throw new Error("Failed to fetch user");
    }
    const user = await response.json();
    return user;
  } catch (error) {
    console.error(error);
  }
}
