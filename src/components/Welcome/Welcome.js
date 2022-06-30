import React from 'react';

// Welcomes the user, explains the premise.
const Welcome = (props) => {
  return (
    <section aria-label="Welcome">
      <h1>Welcome</h1>
      <p>Instructions...</p>
      <p>
        <button onClick={props.startHandler}>Start</button>
      </p>
    </section>
  );
};

export default Welcome;
