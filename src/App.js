import './scss/main.scss';
import React, { useState } from 'react';
import Welcome from './components/Welcome/Welcome';
import Table from './components/Table/Table';

function App() {
  const [showCards, setShowCards] = useState(false);
  const startHandler = () => {
    setShowCards(true);
  }
  return (
    <>
      {
        showCards ? <Table/> : <Welcome startHandler={startHandler}/>
      }
    </>
  );
}

export default App;
