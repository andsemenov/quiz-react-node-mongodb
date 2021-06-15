import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

const Routes = () => {
  return (
    <Router>
      <Route path="/" exact component={Quiz} />
      <Route path="/result" exact component={Result} />
    </Router>
  );
};

export default Routes;
