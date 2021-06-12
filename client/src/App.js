import React, { useState, useEffect } from "react";
import "./App.css";
import QuestionForm from "./QuestionForm";

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3001/questions");
        const json = await response.json();
        setQuestions(json);
        if (questions.length > 0) {
          setIsLoading(false);
        }
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, [questions.length]);

  console.log(questions);
  return (
    <>
      {isLoading ? <h1>Loading...</h1> : <QuestionForm questions={questions} />}
    </>
  );
};

export default App;
