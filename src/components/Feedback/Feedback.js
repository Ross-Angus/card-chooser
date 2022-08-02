import React from 'react';
import { answers } from '../../utility/utility';

// Welcomes the user, explains the premise.
const Feedback = (props) => {
  const lastAnswer = answers[props.index - 1];
  let lastChoice = '';
  let lastResult = null;
  let resultClass = '';
  if (props.index) {
    lastChoice = lastAnswer.userAnswer === 'js' ? 'JavaScript framework' : 'cryptocurrency';
    lastResult = lastAnswer.type === lastAnswer.userAnswer ? true : false;
    resultClass = lastResult ? 'correct' : 'incorrect';
  }

  return (
    <>
      {props.index ? (
        <section aria-label="Answers" className={`feedback ${resultClass}`}>
          <h1>Answers</h1>
          <p>You thought that {lastAnswer.name} was {lastChoice}.</p>
          <p>{lastAnswer.name} is a {lastAnswer.type === 'js' ? 'JavaScript framework' : 'a cryptocurrency'}.</p>
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
