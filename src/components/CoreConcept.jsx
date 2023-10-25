import React from "react";

const CoreConcept = ({ c }) => {
  return (
    <li>
      <img src={c.image} alt={c.title} />
      <h3>{c.title}</h3>
      <p>{c.description}</p>
    </li>
  );
};

export default CoreConcept;
