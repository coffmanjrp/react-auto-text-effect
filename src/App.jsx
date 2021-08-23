import { useState } from 'react';
import useInterval from './lib/hooks/useInterval';
import './App.scss';

function App() {
  const text = 'We Love Programming!';
  const [index, setIndex] = useState(1);
  const [value, setValue] = useState(1);
  let speed = 300 / value;

  useInterval(() => {
    setIndex((idx) => idx + 1);

    if (index > text.length) {
      setIndex(1);
    }
  }, speed);

  return (
    <div className="App">
      <h1>{text.slice(0, index)}</h1>
      <div className="container">
        <label htmlFor="speed">Speed:</label>
        <input
          type="number"
          name="speed"
          id="speed"
          min="1"
          max="5"
          step="1"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
