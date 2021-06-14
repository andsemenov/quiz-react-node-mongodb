import React from "react";
import { Button } from "semantic-ui-react";
import "./style.css";

const ResultForm = (props) => {
  return (
    <>
      <p>
        You answered {props.answered} from {props.questions}
      </p>
      <Button id="btn-try-again" type="submit">
        Try again
      </Button>
    </>
  );
};

export default ResultForm;
