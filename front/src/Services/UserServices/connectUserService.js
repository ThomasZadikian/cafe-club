import { jwtDecode } from "jwt-decode";
import { BASE_API_URL } from "../../Assets/constantes/API_URL";

export const connectUserService = async (formData) => {
  const email = formData.get("email");
  const password = formData.get("password");
  try {
    const response = await fetch(`${BASE_API_URL}users/fetchUserConnect`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    if (response.ok) {
      const { token } = await response.json();
      localStorage.setItem("token", token);
      const user = jwtDecode(token);
      return user;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

export const logoutUserService = () => {
  localStorage.removeItem("token");
};

export const getCurrentUser = () => {
  try {
    const token = localStorage.getItem("token");
    return jwtDecode(token);
  } catch (ex) {
    return null;
  }
};

export default connectUserService;
