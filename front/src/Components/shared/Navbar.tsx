import React from "react";
import SearchBox from "./SearchBox";
import SearchIcon from "./SearchIcon";
import NavLink from "./NavLink";
import { useUser } from "../../Context/UserContext";
import { logoutUserService } from "../../Services/UserServices/connectUserService";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const { user, setUser } = useUser();

  const disconnectUser = () => {
    logoutUserService();
    window.location.href = "/";
  };
  return (
    <header className="flex justify-center">
      <nav className="md:flex flex-col md:flex-row justify-center items-center rounded-lg mt-5 border border-gold px-2 w-screen md:max-w-screen-lg">
        <div className="flex items-center mb-2 md:mb-0">
          <SearchIcon height={"38"} width={"38"} fill={"white"} />
          <SearchBox
            className={
              "bg-background-dark text-sm outline-none md:border-r border-gray-300 h-10 pr-2 w-full"
            }
            placeholder={"Pas encore fonctionnel"}
          />
        </div>
        <ul className="md:flex mb:grid mb:grid-cols-2 gap-2 bg-background-dark p-2 mx-auto md:mt-2">
          <NavLink to={"/"} label={"Accueil"} />
          <NavLink to={"/shop"} label={"Produits"} />
          <NavLink to={"/contact"} label={"Où nous trouver"} />
          {!user ? (
            <NavLink to={"/connect"} label={"Se connecter"} />
          ) : (
            <button
              type="button"
              className="bg-background-button justify-center flex items-center rounded-full text-center md:px-8 md:py-3 mb-2 py-3"
              onClick={disconnectUser}
            >
              Déconnexion
            </button>
          )}
          {user && user.role_id === 1 ? (
            <NavLink to={"/admin"} label={"Admin"} />
          ) : null}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
