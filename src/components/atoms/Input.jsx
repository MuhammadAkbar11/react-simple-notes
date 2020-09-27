import React from "react";

function Input(props) {
  return (
    <input
      className="tw-input"
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      onChange={props.onChange}
      {...props.atributes}
      value={props.value}
    />
  );
}

Input.defaultProps = {
  type: "text",
};

export default Input;
