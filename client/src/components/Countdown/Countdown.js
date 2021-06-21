import React, { useState, useEffect } from "react";

const Countdown = (props) => {
  const [timeLeft, setTimeLeft] = useState(props.seconds);

  useEffect(() => {
    if (!timeLeft) {
      props.onTick();
      setTimeLeft(props.seconds);
    }

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft, props]);

  React.useEffect(() => {
    if (!props.active) {
      setTimeLeft(props.seconds);
    }
  }, [props]);

  return timeLeft < 10 ? (
    <p>Time left: 00:0{timeLeft} sec</p>
  ) : (
    <p>Time left: 00:{timeLeft} sec</p>
  );
};

export default Countdown;
