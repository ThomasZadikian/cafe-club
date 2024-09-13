import { Link } from "react-router-dom";
import React from "react";

type NavLinkProps = {
  to: string;
  label: string;
};

const NavLink: React.FC<NavLinkProps> = ({ to, label }) => {
  const isActive = window.location.pathname === to;
  return (
    <Link
      to={to}
      className={`bg-background-button justify-center flex items-center rounded-full text-center md:px-8 md:py-3 mb-2 py-3 ${
        isActive ? "bg-gold text-black" : ""
      }`}
    >
      {label}
    </Link>
  );
};

export default NavLink;
