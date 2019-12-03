import React from "react";
import { Route } from "react-router-dom";
import First from "./First";
import Second from "./Second";
import NumberButton from "./NumberButton";

function Router() {
  return (
  <div>
    <Route path="/first" component={First} />
    <Route path="/second" component={Second} />
    <Route path="/numberbutton" component={NumberButton} />
  </div>
  )
}

export default Router;
