const fetchUser = require("../../back/controllers/UsersController/fetchUserController");
const insertUser = require("../../back/controllers/UsersController/insertUserController");
const bcrypt = require("bcrypt");

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

const insertUserVerification = async (username, email, password) => {
  const saltRounds = 10;
  const userInformations = [];
  /*  Vérifier si l'utilisateur existe déjà via le controller fetchUser */
  const user = await fetchUser.fetchUser(username, email);
  const checkUsernameVerification = usernameVerification(username);
  const checkPassword = passwordVerification(password);
  if (user.length === 0 && checkUsernameVerification && checkPassword) {
    bcrypt.hash(password, saltRounds, function (err, hash) {
      insertUser.insertUser(username, email, hash);
    });
  } else {
    return console.error("Cet utilisateur existe déjà");
  }
};

const pushToController = (username, email, password, role_id) => {};
