import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Quiz from "./components/Quiz";

const Routes = () => {
  return (
    <Router>
      <Route path="/" exact component={Quiz} />
    </Router>
  );
};

export default Routes;
