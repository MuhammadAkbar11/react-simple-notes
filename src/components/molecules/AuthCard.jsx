import React, { useState } from "react";

const authCardStyle = {
  sm: "sm:w-10/12 sm:px-8 ",
  md:
    "md:px-9 md:relative md:shadow-none md:w-1/2 md:h-screen md:order-2 md:shadow-none md:pt-7",
  lg: "lg:w-2/6",
};

const AuthCard = props => {
  const [cardClassName, setCardClass] = useState(authCardStyle);

  return (
    <>
      <div
        className={`auth--card w-10/12 h-80vh shadow-lg ${cardClassName.sm} ${cardClassName.md} ${cardClassName.lg} `}
      >
        {props.children}
      </div>
    </>
  );
};
export default AuthCard;
