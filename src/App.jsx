import './App.scss';

function App() {
  return (
    <div className="App">
      <h1>We Love Programming!</h1>
      <div className="container">
        <label htmlFor="speed">Speed:</label>
        <input
          type="number"
          name="speed"
          id="speed"
          value={1}
          min="1"
          max="5"
          step="1"
        />
      </div>
    </div>
  );
}

export default App;
