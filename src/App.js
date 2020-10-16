import React, { useState } from 'react';
import Parent from './Parent.js'
// import logo from './logo.svg';
// import './App.css';

function App() {
  let [number, setNumber] = useState(18);

  return (
    <div>
      <Parent num={number} />
      Number: {number} <br />
      <button onClick={() => { setNumber(++number) }}>Increment Number</button>
    </div>
  );
}

export default App;
