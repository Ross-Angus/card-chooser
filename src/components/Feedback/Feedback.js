import React from 'react';
import { answers } from '../../utility/utility';

// Welcomes the user, explains the premise.
const Feedback = (props) => {
  const lastAnswer = answers[props.index - 1];
  return (
    <>
      {props.index ? (
        <section aria-label="Answers" className="feedback">
          <h1>Answers</h1>
          <p>You thought that {lastAnswer.name} was {lastAnswer.userAnswer}.</p>
        </section>
      ) : (
        <section aria-label="Welcome" className="feedback">
          <h1>Welcome</h1>
          <p>Instructions...</p>
        </section>
      )}
    </>
  );
};

export default Feedback;
