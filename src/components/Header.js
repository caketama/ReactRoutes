import React from "react";
import "../App.css"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link className="link" to="/fizzbuzz">FizzBuzz!</Link> 
      <Link className="link" to="/numberbutton">Number Button</Link> 
      <Link className="link" to="/pokemon">Pokemon</Link> 
    </div>
  );
};

export default Header;
