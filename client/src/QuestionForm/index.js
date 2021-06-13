import React, { useState } from "react";
import { Button, Form, Radio, Divider } from "semantic-ui-react";
import "./style.css";

const QuestionForm = (props) => {
  const [counterQuestion, setCounterQuestion] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  console.log(selectedAnswer);

  const handleChange = (event, { value }) => {
    setSelectedAnswer(value);
    console.log("stop press");
  };

  return (
    <>
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
    </>
  );
};

export default QuestionForm;
