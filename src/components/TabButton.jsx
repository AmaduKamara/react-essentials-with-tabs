import React from "react";

const TabButton = ({ children }) => {
  return (
    <li>
      <li>
        <button>{children}</button>
      </li>
    </li>
  );
};

export default TabButton;
