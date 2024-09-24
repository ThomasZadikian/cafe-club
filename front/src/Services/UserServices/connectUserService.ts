import { jwtDecode } from "jwt-decode";
import { BASE_API_URL } from "../../Assets/constantes/API_URL";
import { User } from "../../Interface/User";


export const connectUserService = async (formData: FormData) => {

  const email = formData.get("email");
  const password = formData.get("password");
  console.log("je suis avant le try")
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
      const { result } = await response.json();
      localStorage.setItem("token", result.token);
      // const decodedToken = jwtDecode(result.token);
      const user = result;
      return user;
    } else {
      console.log("je suis le premier false")

      return false;
    }
  } catch (error) {
    console.log("je suis le false du catch")

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
