import React from "react";

function CardFooter({ className, childred }) {
  return (
    <div className={` bottom-0 mt-auto px-5 py-6 ${className} `}>
      {childred}
    </div>
  );
}

export default CardFooter;
