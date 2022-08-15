import React, { useState } from "react";
import { elementsOverlap, answers } from "../../utility/utility";
import Feedback from "../Feedback/Feedback";
import JSLib from "../DropZones/JSLib/JSLib";
import Crypto from "../DropZones/Crypto/Crypto";
import NewCard from "../NewCard/NewCard";
import Results from "../Results/Results";

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
  const [cardClass, setCardClass] = useState("card");
  const [dragPosition, setDragPosition] = React.useState(null);
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
    let answered = false;
    if (elementsOverlap(el, jsLibEl)) {
      answers[currentCard].userAnswer = "js";
      answered = true;
    }
    if (elementsOverlap(el, cryptoEl)) {
      answers[currentCard].userAnswer = "crypto";
      answered = true;
    }

    if (answered) {
      setCurrentCard(currentCard + 1);
      // Plays the animation of the card falling down
      setCardClass("card drop");
      // Waits for the animation to finish
      setTimeout(() => {
        // Removes the falling down class
        setCardClass("card");
        // Resets the card's initial position
        setDragPosition({ x: 0, y: 0 });
      }, 1000);
      answered = false;
    }
  };

  return (
    <main className="table">
      {answers.length > currentCard ? (
        <>
          <Feedback index={currentCard} />
          <JSLib update={updateJsLib} hover={jsLibHoverClass} />
          <Crypto update={updateCrypto} hover={cryptoHoverClass} />
          <NewCard
            cardClass={cardClass}
            cardDrop={cardDrop}
            cardHover={cardHover}
            currentCard={answers[currentCard]}
            dragPosition={dragPosition}
            key={currentCard.name}
          />
        </>
      ) : (
        <Results answers={answers} setCurrentCard={setCurrentCard} />
      )}
    </main>
  );
};

export default Table;
