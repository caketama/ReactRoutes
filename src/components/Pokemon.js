import React, { useState } from "react";

function Pokemon() {
  const [data, setData] = useState({});
  const [query, setQuery] = useState("");

  const sendData = async () => {
    const response = await fetch(`http://pokeapi.co/api/v2/pokemon/${query}`);
    const output = await response.json();
    setData(output);
  };
  return (
    // Add loading logic
    <div>
    <input onChange={e => setQuery(e.target.value)}/>
      <button onClick={e => sendData(data)}>Search</button>
      <div>
      
      <h3>{data.name}</h3>
    {console.log(data)}
      <p>{data.id}</p>
        </div>
      </div>
  )
}
export default Pokemon;
