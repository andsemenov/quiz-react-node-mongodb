import React, { useState } from "react";
import { Button, Form, Radio } from "semantic-ui-react";
import questions from "./data";

const QuestionForm = () => {
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
        onSubmit={() => {
          setSelectedAnswer("");
          setCounterQuestion((prev) => prev + 1);
        }}
      >
        <p>
          Question {counterQuestion} from {questions.length}
        </p>
        <p>{questions[counterQuestion - 1].question}</p>
        {questions[counterQuestion - 1].options.map((option, index) => {
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

        <Button type="submit">Next</Button>
      </Form>
    </>
  );
};

export default QuestionForm;
