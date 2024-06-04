import { Link } from "react-router-dom";

const NavLink = ({ to, label }) => {
  const isActive = window.location.pathname === to;
  return (
    <li>
      <Link
        to={to}
        className={`bg-background-button justify-center flex items-center rounded-full text-center md:px-8 md:py-3 mb-2 py-3 ${
          isActive ? "bg-gold text-black" : ""
        }`}
      >
        {label}
      </Link>
    </li>
  );
};

export default NavLink;
