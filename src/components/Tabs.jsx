import React from "react";
import TabButton from "./TabButton";

const Tabs = () => {
  const handleSelect = () => {
    console.log("Hello world");
  };

  return (
    <section id='examples'>
      <h2>Examples</h2>
      <menu>
        <TabButton onSelect={handleSelect}>Components</TabButton>
        <TabButton onSelect={handleSelect}>JSX</TabButton>
        <TabButton onSelect={handleSelect}>Props</TabButton>
        <TabButton onSelect={handleSelect}>State</TabButton>
      </menu>
      
    </section>
  );
};

export default Tabs;
