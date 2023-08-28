import { Link } from "react-router-dom";

const NavLink = ({ to, label }) => {
  const isActive = window.location.pathname === to;
  const classNames = `bg-background-button flex items-center px-4 py-2 rounded-full mx-2 text-center ${
    isActive ? "bg-gold text-black" : ""
  }`;
  return (
    <li className="flex w-full">
      <Link
        to={to}
        className={`w-full h-full flex items-center justify-center ${classNames}`}
      >
        {label}
      </Link>
    </li>
  );
};

export default NavLink;
