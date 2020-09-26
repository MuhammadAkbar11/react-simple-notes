import React, { Fragment } from "react";

function CardHeader({ className, childred }) {
  return (
    <div className={`top-0 mb-auto px-5 py-6 ${className} `}>{childred}</div>
  );
}

export default CardHeader;
