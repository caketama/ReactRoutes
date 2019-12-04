import React from "react";
import withFizzBuzz from "./withFizzBuzz";
import FizzBuzz from './FizzBuzz'

function Fizz(props) {
  const output = [...Array(props.number).keys()].map(i => {
    return withFizzBuzz(i);
  });

  return <div>{output}</div>;
}

export default Fizz;
