import React, { useState } from "react";
import TabButton from "./TabButton";

const Tabs = () => {
  const [tabContent, setTabCcontent] = useState(
    "Pleaase click a button to show content"
  );

  const handleSelect = (selectedButton) => {
    // selectedButton => 'component', 'Jsx', 'Props', 'State'
    setTabCcontent(selectedButton);
    console.log(tabContent);
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
      {tabContent}
    </section>
  );
};

export default Tabs;
