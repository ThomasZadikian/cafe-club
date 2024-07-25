import fetchUser from "./fetchUserServices";

export const connectUserService = async (formData) => {
  try {
    const users = await fetchUser(formData);
    const password = formData.get("password");
    if (users !== null) {
      return users[0].password === password;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

export default connectUserService;
