import React from "react";
import TabButton from "./TabButton";

const Tabs = () => {
  return (
    <section id='examples'>
      <h2>Examples</h2>
      <menu>
        <TabButton>Components</TabButton>
        <TabButton>JSX</TabButton>
        <TabButton>Props</TabButton>
        <TabButton>State</TabButton>
      </menu>
    </section>
  );
};

export default Tabs;
