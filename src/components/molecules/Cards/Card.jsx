import React from "react";

const Card = props => {
  return (
    <div {...props.atributes} className={`tw-card ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Card;
