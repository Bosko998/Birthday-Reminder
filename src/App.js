import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);
  const [text, setText] = useState("Clear all");
  const buttonFunctionality = () => {
    if (people.length === 0) {
      setPeople(data);
      setText("Clear all");
    } else {
      setPeople([]);
      setText("Retreive all");
    }
  };
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />

        <button onClick={buttonFunctionality}>{text}</button>
      </section>
    </main>
  );
}

export default App;
