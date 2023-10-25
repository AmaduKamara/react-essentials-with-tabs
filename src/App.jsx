import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header/Header";
import Tabs from "./components/Tabs";

import { CORE_CONCEPTS } from "./data";

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id='core-concepts'>
          <ul>
            {CORE_CONCEPTS.map((c) => (
              <CoreConcept c={c} key={c.title} />
            ))}
          </ul>
        </section>
        <Tabs />
      </main>
    </div>
  );
}

export default App;
