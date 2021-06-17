import React, { useState, useEffect } from "react";
import { Button, Form, Radio, Divider } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import "./style.css";

const QuestionForm = (props) => {
  const [counterQuestion, setCounterQuestion] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [counterRightAnswers, setCounterRightAnswers] = useState(0);

  useEffect(() => {
    if (selectedAnswer !== "") {
      if (
        props.questions[counterQuestion - 1].options.indexOf(selectedAnswer) ===
        props.questions[counterQuestion - 1].rightAnswer
      ) {
        setCounterRightAnswers((prev) => prev + 1);
      }
    }
    sessionStorage.setItem("right", JSON.stringify(counterRightAnswers));

    sessionStorage.setItem("total", JSON.stringify(props.questions.length));
  }, [selectedAnswer]);

  const handleChange = (event, { value }) => {
    setSelectedAnswer(value);
  };

  return (
    <>
      {counterQuestion <= props.questions.length ? (
        <Form
          className="question-form"
          onSubmit={() => {
            setSelectedAnswer("");
            setCounterQuestion((prev) => prev + 1);
          }}
        >
          <p>
            Question {counterQuestion} from {props.questions.length}
          </p>
          <Divider fitted />
          <p>{props.questions[counterQuestion - 1].question}</p>
          {props.questions[counterQuestion - 1].options.map((option, index) => {
            return (
              <Form.Field key={index}>
                <Radio
                  label={option}
                  value={option}
                  checked={selectedAnswer === option}
                  disabled={selectedAnswer !== ""}
                  onChange={handleChange}
                />
              </Form.Field>
            );
          })}
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
