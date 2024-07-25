import React from "react";
import SearchBox from "./SearchBox";
import SearchIcon from "./SearchIcon";
import NavLink from "./NavLink";

const Navbar = () => {
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
          <NavLink to={"/"} label={"Home"} />
          <NavLink to={"/shop"} label={"Products"} />
          <NavLink to={"/contact"} label={"Contact"} />
          <NavLink to={"/create"} label={"Create"} />
          <NavLink to={"/connect"} label={"Connect"} />
          <NavLink to={"/admin"} label={"Admin"} />
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
