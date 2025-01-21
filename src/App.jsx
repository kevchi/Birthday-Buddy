import data from './data';
import { useState } from 'react';
import List from './List';

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <div>
      <h2>Birthday Reminder - Starter</h2>
      <List people={people} />
    </div>
  );
};
export default App;
