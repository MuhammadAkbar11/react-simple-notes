import React from "react";

const defaultProps = {
  tag: "button",
  disabled: false,
};

function Button(props) {
  const defaultClassName = " tw-btn";
  const { tag, className, children, disabled, ...atributes } = props;
  const Tag = tag;
  const newClassName = `${defaultClassName} ${className} ${
    disabled ? "tw-btn-disabled cursor-not-allowed" : ""
  } `;
  return (
    <Tag {...atributes} className={newClassName}>
      {children}
    </Tag>
  );
}

Button.defaultProps = defaultProps;

export default Button;
