import React, { Children } from "react";

const defaultProps = {
  tag: "p",
};

function CardTitle(props) {
  const defaultClassName = "tw-card-title lg:text-6xl";
  const { tag, className, children, ...atributes } = props;
  const Tag = tag;
  const newClassName = defaultClassName + " " + className;
  return (
    <Tag {...atributes} className={newClassName}>
      {children}
    </Tag>
  );
}

CardTitle.defaultProps = defaultProps;

export default CardTitle;
