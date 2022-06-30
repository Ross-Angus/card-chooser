import './scss/main.scss';
import React, { useState } from 'react';
import Welcome from './components/Welcome/Welcome';
import NewCard from './components/NewCard/NewCard';

function App() {
  const [showCards, setShowCards] = useState(false);
  const startHandler = () => {
    setShowCards(true);
  }
  return (
    <>
      {
        showCards ? <NewCard/> : <Welcome startHandler={startHandler}/>
      }
    </>
  );
}

export default App;
