import "./App.css";
import React, { useState } from "react";


function App() {

  const [Counter, setCounter] = useState(0)
  return (
    <>
      <h2>Counter App</h2>
      <div className="flex">
        <button onClick={() => setCounter(Counter - 1)}>+</button>
        <p>{Counter}</p>
        <button onClick={() => setCounter(Counter + 1)}>+</button>
      </div>
    </>

  );
}

export default App;
