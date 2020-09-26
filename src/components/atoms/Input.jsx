import React from "react";

function Input(props) {
  return (
    <input
      className="tw-input"
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      {...props.atributes}
    />
  );
}

Input.defaultProps = {
  type: "text",
};

export default Input;
