import React from "react";

const defaultProps = {
  color: "success",
  isOpen: true,
  tag: "div",
};

function Alert(props) {
  const defaultClassName = `tw-alert tw-alert-${props.color}`;
  const { tag, className, children, ...atributes } = props;
  const Tag = tag;
  const newClassName = defaultClassName + " " + className;
  return (
    <Tag {...atributes} className={newClassName}>
      {children}
    </Tag>
  );
}

Alert.defaultProps = defaultProps;

export default Alert;
