import './scss/main.scss';
import React, { useState } from 'react';
import Welcome from './components/Welcome/Welcome';

function App() {
  const [showCards, setShowCards] = useState(false);
  const startHandler = () => {
    setShowCards(true);
  }
  return (
    <>
      {
        showCards ? <p>You have begun</p> : <Welcome startHandler={startHandler}/>
      }
    </>
  );
}

export default App;
