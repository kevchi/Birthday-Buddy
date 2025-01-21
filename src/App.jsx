import data from './data';
import { useState } from 'react';
import List from './List';

const App = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };
  /* 
- First we takes an id parameter which will be used to identify the specific person object to remove
- We use setPeople (our state setter function from useState) to update our state
- Inside setPeople, we use the filter array method which:
  - Creates a new array (important for React's immutability requirements)
  - Returns only elements where the condition is true
  - The condition person.id !== id means "keep every person whose id does NOT match the id we passed in"
  */

  const removeAll = () => setPeople([]);

  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthday Today Reminder - Starter</h3>

        <List people={people} />

        {/* 
      <button onClick={() => setPeople([])}>Clear All</button>
      <button onClick={() => removeAll}>Clear All</button> 
      */}
        <button type="button" className="btn btn-block" onClick={removeAll}>
          Clear All
        </button>
      </section>
    </main>
  );
};
export default App;
