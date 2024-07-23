import React from "react";

const ErrorMessage = ({ message, error }) => {
  return (
    <div
      className={`fixed top-2 right-5 bg-red-600 text-white p-5 rounded-lg 
      transition-opacity ease-in duration-700 ${
        error ? "opacity-100" : "opacity-0"
      }`}
    >
      {message}
    </div>
  );
};

export default ErrorMessage;
