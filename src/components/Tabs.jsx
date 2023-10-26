import React from "react";
import TabButton from "./TabButton";

const Tabs = () => {
  const handleSelect = (selectedButton) => {
    // selectedButton => 'component', 'Jsx', 'Props', 'State'
    console.log(selectedButton);
  };

  return (
    <section id='examples'>
      <h2>Examples</h2>
      <menu>
        <TabButton onSelect={() => handleSelect("components")}>
          Components
        </TabButton>
        <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
        <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
        <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
      </menu>
    </section>
  );
};

export default Tabs;
