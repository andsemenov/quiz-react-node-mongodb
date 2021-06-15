import React from "react";
import { Button } from "semantic-ui-react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./style.css";

const ResultForm = (props) => {
  console.log(props.history.location.props);
  return (
    <>
      <p>
        You answered {props.history.location.props.answered} from{" "}
        {props.history.location.props.questions}
      </p>
      <Link id="btn-try-again" type="submit" to="/">
        Try again
      </Link>
    </>
  );
};

export default ResultForm;
