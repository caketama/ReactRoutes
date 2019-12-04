import React, { useState } from "react";

function Fizz() {
  const [number, setNumber] = useState(0);
  const [buzzNumber, setBuzzNumber] = useState(0);
  return (
    <div>
      <input onChange={e => setNumber(e.target.value)} />
      <button onClick={e => setBuzzNumber(Number)}>FizzBuzz!</button>
    </div>
  );
}

export default Fizz;
