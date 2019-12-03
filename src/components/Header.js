import React from "react";
import "../App.css"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link className="link" to="/first">First Component</Link>
      <Link className="link" to="/second">Second Component</Link>
      <Link className="link" to="/numberbutton">Number Button</Link> 
    </div>
  );
};

export default Header;
