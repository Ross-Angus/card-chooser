import React, { useState } from "react";
import { elementsOverlap, judge, answers } from '../../utility/utility';
import NewCard from "../NewCard/NewCard";
import JSLib from "../DropZones/JSLib/JSLib";
import Crypto from "../DropZones/Crypto/Crypto";

// Contains the card and the two drop zones
const Table = () => {
  // The side dropzone elements
  // These will initially be null but once the user drags the card,
  // the child components will have rendered and populated these
  // states.
  const [jsLibEl, setJsLibEl] = useState();
  const [cryptoEl, setCryptoEl] = useState();
  const [jsLibHoverClass, setJsLibHoverClass] = useState("");
  const [cryptoHoverClass, setCryptoHoverClass] = useState("");
  const [currentCard, setCurrentCard] = useState(answers[0]);

  const updateJsLib = (el) => {
    setJsLibEl(el);
  };

  const updateCrypto = (el) => {
    setCryptoEl(el);
  };

  // No choices are made with the hover, it's just used to highlight which
  // drop zone the user is over.
  const cardHover = (el) => {
    elementsOverlap(el, jsLibEl)
      ? setJsLibHoverClass(" hover")
      : setJsLibHoverClass("");
    elementsOverlap(el, cryptoEl)
      ? setCryptoHoverClass(" hover")
      : setCryptoHoverClass("");
  };

  // The user has stopped dragging and has dropped the card
  const cardDrop = (el) => {
    // console.log(el);
    elementsOverlap(el, jsLibEl) && console.log("You chose JavaScript");
    elementsOverlap(el, cryptoEl) && console.log("You chose cryptocurrency");
  };

  return (
    <main className="table">
      <JSLib update={updateJsLib} hover={jsLibHoverClass} />
      <Crypto update={updateCrypto} hover={cryptoHoverClass} />
      <NewCard currentCard={currentCard} cardHover={cardHover} cardDrop={cardDrop}/>
    </main>
  );
};

export default Table;
