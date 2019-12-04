import React, { useState } from "react";
import withFizzBuzz from "./withFizzBuzz";

function FizzBuzz(props) {
  const [number, setNumber] = useState("");
  const [buzzNumber, setBuzzNumber] = useState("");

  return (
    <div>
      <input onChange={e => setNumber(e.target.value)} />
      <button onClick={e => setBuzzNumber(props.number)}>FizzBuzz!</button>
    </div>
  );
}

export default FizzBuzz;
