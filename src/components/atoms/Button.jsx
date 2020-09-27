import React from "react";

const defaultProps = {
  tag: "button",
};

function Button(props) {
  const defaultClassName = " tw-btn";
  const { tag, className, children, ...atributes } = props;
  const Tag = tag;
  const newClassName = defaultClassName + " " + className;
  return (
    <Tag {...atributes} className={newClassName}>
      {children}
    </Tag>
  );
}

Button.defaultProps = defaultProps;

export default Button;
