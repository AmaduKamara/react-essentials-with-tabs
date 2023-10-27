import React, { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data.js";

const Tabs = () => {
  const [selectedTopic, setSelectedTopic] = useState("component");

  const handleSelect = (selectedButton) => {
    // selectedButton => 'component', 'Jsx', 'Props', 'State'
    setSelectedTopic(selectedButton);
  };

  // console.log(EXAMPLES[selectedTopic].title);

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
      <div id='tab-content'>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    </section>
  );
};

export default Tabs;
