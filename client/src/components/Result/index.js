import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const ResultForm = () => {
  const [answeredRight, setAnsweredRight] = useState("");
  const [questionsTotal, setQuestionsTotal] = useState("");

  useEffect(() => {
    setAnsweredRight(JSON.parse(sessionStorage.getItem("right")));

    setQuestionsTotal(JSON.parse(sessionStorage.getItem("total")));
  }, []);

  return (
    <div className="quiz-result">
      <div className="result">
        <h1>A good try!</h1>
        <p>
          You answered {answeredRight} questions from {questionsTotal}
        </p>
        <Link id="btn-try-again" type="submit" to="/">
          Try again
        </Link>
      </div>
    </div>
  );
};

export default ResultForm;
