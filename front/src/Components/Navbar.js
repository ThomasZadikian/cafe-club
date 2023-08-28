import React from "react";
import SearchBox from "./SearchBox";
import SearchIcon from "./SearchIcon";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <header className="flex justify-center">
      <nav className="md:flex flex-col md:flex-row justify-center items-center rounded-lg mt-5 border border-gold px-2 w-screen md:max-w-screen-md">
        <div className="flex items-center mb-2 md:mb-0 md:mr-2">
          <SearchIcon height={"38"} width={"38"} fill={"white"} />
          <SearchBox
            className={
              "bg-background-dark text-sm outline-none md:border-r border-gray-300 h-10 pr-2 w-full"
            }
            placeholder={"Recherchez votre produit"}
          />
        </div>
        <ul className="md:flex grid grid-cols-2 md:grid-cols-1 gap-2 bg-background-dark p-2">
          <NavLink to={"/"} label={"Accueil"} />
          <NavLink to={"/shop"} label={"Shop"} />
          <NavLink to={"/order"} label={"Commandes"} />
          <NavLink to={"/contact"} label={"Contact"} />
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
