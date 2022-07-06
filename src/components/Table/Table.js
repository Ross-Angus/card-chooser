import React from 'react';
import NewCard from '../NewCard/NewCard';
import JSLib from '../DropZones/JSLib/JSLib';
import Crypto from '../DropZones/Crypto/Crypto';


// Contains the card and the two drop zones
const Table = () => {
  return (
    <main className="table">
      <JSLib/>
      <Crypto/>
      <NewCard/>
    </main>
  );
};

export default Table;
