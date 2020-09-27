import React from "react";

const defaultProps = {
  tag: "p",
};

function CardText(props) {
  const defaultClassName = " tw-card-text ";
  const { tag, className, children, ...atributes } = props;
  const Tag = tag;
  const newClassName = defaultClassName + " " + className;
  return (
    <Tag {...atributes} className={newClassName}>
      {children}
    </Tag>
  );
}

CardText.defaultProps = defaultProps;

export default CardText;
