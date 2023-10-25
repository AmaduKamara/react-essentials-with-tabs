import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header";

import componentsImg from "./assets/components.png";

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id='core-concepts'>
          <ul>
            <CoreConcept
              title='Components'
              description='The core UI building block.'
              image={componentsImg}
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
