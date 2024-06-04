// const fetchUser = require("../../back/controllers/UsersController/fetchUserController");
// const insertUser = require("../../back/controllers/UsersController/insertUserController");

const usernameVerification = (username) => {
  if (typeof username !== "string") {
    return console.log(
      "Erreur : Le nom d'utilisateur doit être une chaîne de caractères"
    );
  } else {
    switch (username) {
      case "":
        console.log("Erreur : Le nom d'utilisateur ne peut pas être vide");
        return false;
      case "admin":
        console.log("Erreur : Ce nom d'utilisateur est réservé");
        return false;
      default:
        console.log("Le nom d'utilisateur est valide");
        return true;
    }
  }
};

const passwordVerification = (password) => {
  if (typeof password !== "string") {
    return console.log(
      "Erreur : le mot de passe doit être une chaine de caractère"
    );
  } else {
    switch (password) {
      case "":
        console.log(
          "Erreur : Le nom d'utilisateumot de passe ne peut pas être vide "
        );
        return false;
      case "admin":
        console.log("Erreur : Ce mot de passe est réservé est réservé");
        return false;
      default:
        console.log("Le mot de passe est valide");
        return true;
    }
  }
};

export const insertUserVerification = (username, email, password) => {
  /*  Vérifier si l'utilisateur existe déjà via le controller fetchUser */
  const checkUsernameVerification = usernameVerification(username);
  const checkPassword = passwordVerification(password);
  if (checkUsernameVerification && checkPassword) {
    console.log("Appeler la fonction d'insert en base de donnée");
  } else {
    return console.error("Cet utilisateur existe déjà");
  }
};

// const pushToController = (username, email, password, role_id) => {};

export default insertUserVerification;
