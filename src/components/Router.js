import React from "react";
import { Route } from "react-router-dom";
import NumberButton from "./NumberButton";
import Pokemon from './Pokemon'
import Fizzbuzz from './FizzBuzz'

function Router() {
  return (
  <div>
    <Route path="/numberbutton" component={NumberButton} />
    <Route path="/pokemon" component={Pokemon} />
    <Route path="/fizzbuzz" component={Fizzbuzz} />
  </div>
  )
}

export default Router;
