import React from "react";
import { Button } from "semantic-ui-react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./style.css";

const ResultForm = (props) => {
  console.log(props.match.params.answered);
  console.log(props.match.params.questions);
  return (
    <>
      <p>
        You answered {props.match.params.answered} from{" "}
        {props.match.params.questions}
      </p>
      <Link id="btn-try-again" type="submit" to="/">
        Try again
      </Link>
    </>
  );
};

export default ResultForm;
