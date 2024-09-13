import React from "react";

const InputForm = ({ description, name, inputType, className }) => {
  return (
    <>
      <label for={name}>{description}</label>
      {inputType === "textarea" ? (
        <textarea
          name={name}
          id={name}
          className={className}
          cols="30"
          rows="10"
        ></textarea>
      ) : (
        <input type={inputType} name={name} id={name} className={className} />
      )}
    </>
  );
};

export default InputForm;
