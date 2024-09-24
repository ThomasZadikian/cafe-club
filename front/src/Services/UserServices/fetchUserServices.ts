import { BASE_API_URL } from "../../Assets/constantes/API_URL";

export default async function fetchUser(formData: FormData) {
  const username = formData.get("username"); 
  const email = formData.get("email");
  const password = formData.get("password");
  try {
    const response = await fetch(`${BASE_API_URL}users/fetch-user`, {
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
      throw new Error("Failed to fetch user");
    }
    const user = await response.json();
    return user;
  } catch (error) {
    console.error(error);
  }
}
