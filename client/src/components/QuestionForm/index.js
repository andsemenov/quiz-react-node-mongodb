import React, { useState, useEffect } from "react";
import { Button, Form, Radio, Divider } from "semantic-ui-react";
import { Redirect } from "react-router-dom";

import "./style.css";
import Countdown from "../Countdown/Countdown";

const QuestionForm = (props) => {
  const [counterQuestion, setCounterQuestion] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [counterRightAnswers, setCounterRightAnswers] = useState(0);
  const [activeAcounter, setActiveCounter] = React.useState(true);

  useEffect(() => {
    sessionStorage.setItem("right", JSON.stringify(counterRightAnswers));

    sessionStorage.setItem("total", JSON.stringify(props.questions.length));
  }, [props, counterRightAnswers]);

  const handleChange = (event, { value }) => {
    setSelectedAnswer(value);
  };

  const moveToNewQuestion = () => {
    setSelectedAnswer("");
    setCounterQuestion((prev) => prev + 1);
    setActiveCounter(false);
    sessionStorage.removeItem("currentTimer");
    if (selectedAnswer !== "") {
      if (
        props.questions[counterQuestion - 1].options.indexOf(selectedAnswer) ===
        props.questions[counterQuestion - 1].rightAnswer
      ) {
        setCounterRightAnswers((prev) => prev + 1);
      }
    }
  };

  return (
    <>
      {counterQuestion <= props.questions.length ? (
        <Form className="question-form" onSubmit={moveToNewQuestion}>
          <h3>
            Question {counterQuestion} from {props.questions.length}
          </h3>
          <Countdown
            seconds={20}
            onTick={() => {
              moveToNewQuestion();
              setActiveCounter(true);
            }}
            active={activeAcounter}
          />
          <Divider fitted />
          <p id="question">{props.questions[counterQuestion - 1].question}</p>
          {props.questions[counterQuestion - 1].options.map((option, index) => {
            return (
              <Form.Field key={index}>
                <Radio
                  label={option}
                  value={option}
                  checked={selectedAnswer === option}
                  /*         disabled={selectedAnswer !== ""} */
                  onChange={handleChange}
                />
              </Form.Field>
            );
          })}
          <Divider fitted />
          <Button id="btn-next" type="submit">
            Next
          </Button>
        </Form>
      ) : (
        <Redirect to="/result" />
      )}
    </>
  );
};

export default QuestionForm;
