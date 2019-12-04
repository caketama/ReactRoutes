import React, { useState } from "react";

function Pokemon() {
  const [data, setData] = useState({});
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");

  const sendData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`http://pokeapi.co/api/v2/pokemon/${query}`);
      const output = await response.json();
      setData(output);
    } catch (e) {
      setIsError(true);
    }
    setIsLoading(false);
  };
  return (
    // Add loading logic
    <div>
      <input onChange={e => setQuery(e.target.value)} />
      <button onClick={e => sendData(data)}>Search</button>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div>
          <img src={data.sprites.front_shiny} />
          <h3>{data.name}</h3>
          <p>{data.id}</p>
        </div>
      )}
    </div>
  );
}
export default Pokemon;
