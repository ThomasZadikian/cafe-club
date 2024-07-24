import fetchUser from "./fetchUserServices";

export const connectUserService = async (formData) => {
  try {
    const users = await fetchUser(formData);
    const password = formData.get("password");
    if (users !== null) {
      console.log("Utilisateur trouvé");
      console.log(users[0].password);
    }
    if (users[0].password !== password) {
      console.log("Mot de passe incorrect");
      return false;
    } else {
      console.log("Utilisateur trouvé et mot de passe ok");
      return true;
    }
  } catch (error) {
    return false;
  }
};

export default connectUserService;
