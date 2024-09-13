import React from "react";

type InputFormProps = {
  description: string;
  name: string;
  inputType: string;
  className: string;
};

const InputForm: React.FC<InputFormProps> = ({
  description,
  name,
  inputType,
  className,
}) => {
  return (
    <>
      <label htmlFor={name}>{description}</label>
      {inputType === "textarea" ? (
        <textarea
          name={name}
          id={name}
          className={className}
          cols={30}
          rows={10}
        ></textarea>
      ) : (
        <input type={inputType} name={name} id={name} className={className} />
      )}
    </>
  );
};

export default InputForm;
