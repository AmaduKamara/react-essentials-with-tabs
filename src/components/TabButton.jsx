import React from "react";

const TabButton = ({ children }) => {
  const handleClick = () => {
    console.log("Hello world");
  };

  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
};

export default TabButton;
