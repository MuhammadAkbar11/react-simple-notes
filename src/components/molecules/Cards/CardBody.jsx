import React, { useState } from "react";
function CardBody({ className, children }) {
  const [cardBodyClass] = useState("tw-card-body");
  return (
    <div className={`${cardBodyClass} ${className ? className : ""}`}>
      {children}
    </div>
  );
}

export default CardBody;
