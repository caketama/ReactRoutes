import React from "react";
import { Route } from "react-router-dom";
import NumberButton from "./NumberButton";
import Pokemon from './Pokemon'

function Router() {
  return (
  <div>
    <Route path="/numberbutton" component={NumberButton} />
    <Route path="/pokemon" component={Pokemon} />
  </div>
  )
}

export default Router;
