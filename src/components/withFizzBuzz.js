import React from "react";

function withFizzBuzz(number) {
  const key = `${number % 3 === 0}-${number % 5 === 0}`;
  return (
    <div>
      {
        {
          ["false-false"]: <p>{number}</p>,
          ["true-false"]: <p>Fizz</p>,
          ["false-true"]: <p>Buzz</p>,
          ["true-true"]: <p>FizzBuzz</p>
        }[key]
      }
    </div>
  );
}
export default withFizzBuzz;
