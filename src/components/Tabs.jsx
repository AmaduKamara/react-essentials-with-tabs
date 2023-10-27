import React, { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data.js";

const Tabs = () => {
  const [selectedTopic, setSelectedTopic] = useState("");

  const handleSelect = (selectedButton) => {
    // selectedButton => 'component', 'Jsx', 'Props', 'State'
    setSelectedTopic(selectedButton);
  };

  // console.log(EXAMPLES[selectedTopic].title);

  let tabbedContent = <p>Please select a topic above.</p>;

  if (selectedTopic) {
    tabbedContent = (
      <div id='tab-content'>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <section id='examples'>
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onClick={() => handleSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onClick={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onClick={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onClick={() => handleSelect("state")}
        >
          State
        </TabButton>
      </menu>
      {tabbedContent}
    </section>
  );
};

export default Tabs;
