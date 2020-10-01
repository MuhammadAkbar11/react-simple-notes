import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <input
      className="tw-input"
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
      ref={ref}
      {...props.atributes}
    />
  );
});

Input.defaultProps = {
  type: "text",
};

const InputRef = Input;
InputRef.displayName = "input";

export default InputRef;
