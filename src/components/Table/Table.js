import React, { useState } from "react";
import { elementsOverlap, answers } from '../../utility/utility';
import Feedback from "../Feedback/Feedback";
import JSLib from "../DropZones/JSLib/JSLib";
import Crypto from "../DropZones/Crypto/Crypto";
import NewCard from "../NewCard/NewCard";

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
  // A counter, which moves through the answers Array
  const [currentCard, setCurrentCard] = useState(0);

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
    if (elementsOverlap(el, jsLibEl)) {
      answers[currentCard].userAnswer = "js";
      setCurrentCard(currentCard + 1);
    };
    if(elementsOverlap(el, cryptoEl)) {
      answers[currentCard].userAnswer = "crypto";
      setCurrentCard(currentCard + 1);
    }
  };

  return (
    <main className="table">
      {
        answers.length > currentCard ? (
          <>
            <Feedback index={currentCard}/>
            <JSLib update={updateJsLib} hover={jsLibHoverClass} />
            <Crypto update={updateCrypto} hover={cryptoHoverClass} />
            <NewCard currentCard={answers[currentCard]} cardHover={cardHover} cardDrop={cardDrop}/>
          </>
        ) : (
          <h1>Congratulations!</h1>
        )
      }
    </main>
  );
};

export default Table;
