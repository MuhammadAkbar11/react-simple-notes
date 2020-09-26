import React from "react";

const FormsGroup = props => {
  return <div className={`w-full ${props.className}`}>{props.children}</div>;
};

export default FormsGroup;
