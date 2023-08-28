import React from "react";

const SearchBox = ({ className, placeholder }) => {
  return (
    <input
      type="text"
      id="search"
      className={className}
      placeholder={placeholder}
      required
    />
  );
};

export default SearchBox;
