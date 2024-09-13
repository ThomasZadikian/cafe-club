import { jwtDecode } from "jwt-decode";
import { BASE_API_URL } from "../../Assets/constantes/API_URL";
import { User } from "../../Interface/User";

export const connectUserService = async (formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");
  try {
    const response = await fetch(`${BASE_API_URL}users/fetch-user-connect`, {
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
      const decodedToken = jwtDecode(token);
      const user = decodedToken;
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

export const getCurrentUser = (): User | null => {
  try {
    const token = localStorage.getItem("token");
    if (token === null) {
      return null;
    } else {
      return jwtDecode<User>(token);
    }
  } catch (ex) {
    return null;
  }
};

export default connectUserService;
