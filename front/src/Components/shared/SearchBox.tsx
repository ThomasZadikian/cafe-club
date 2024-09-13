import React from "react";

type SearchBoxProps = {
  className: string;
  placeholder: string;
};

const SearchBox: React.FC<SearchBoxProps> = ({ className, placeholder }) => {
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
