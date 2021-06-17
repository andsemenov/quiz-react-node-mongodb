import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./style.css";

const ResultForm = () => {
  const [ans, setAns] = useState("");
  const [quest, setQuest] = useState("");

  useEffect(() => {
    setAns(JSON.parse(sessionStorage.getItem("right")));

    setQuest(JSON.parse(sessionStorage.getItem("total")));
  }, []);

  return (
    <>
      <p>
        You answered {ans} from
        {quest}
      </p>
      <Link id="btn-try-again" type="submit" to="/">
        Try again
      </Link>
    </>
  );
};

export default ResultForm;
