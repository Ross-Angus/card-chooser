import React, { useState} from "react";
import NewCard from "../NewCard/NewCard";
import JSLib from "../DropZones/JSLib/JSLib";
import Crypto from "../DropZones/Crypto/Crypto";

// Contains the card and the two drop zones
const Table = () => {

  // Storying the card element here, so when its position updates, it causes
  // a re-render of the children
  const [cardElement, setCardElement] = useState();

  // Checking to see if two sets of bounds are intersecting
  // Pinched from bobbyhadz.com/blog/javascript-check-if-two-elements-overlap
  const elementsOverlap = (el1, el2) => {
    if (!el1 || !el2) {
      return;
    }

    const domRect1 = el1.getBoundingClientRect();
    const domRect2 = el2.getBoundingClientRect();

    return !(
      domRect1.top > domRect2.bottom ||
      domRect1.right < domRect2.left ||
      domRect1.bottom < domRect2.top ||
      domRect1.left > domRect2.right
    );
  };

  const passCardElement = (el) => {
    setCardElement(el);
  };

  return (
    <main className="table">
      <JSLib elementsOverlap={elementsOverlap} cardElement={cardElement} />
      <Crypto elementsOverlap={elementsOverlap} cardElement={cardElement} />
      <NewCard passCardElement={passCardElement} />
    </main>
  );
};

export default Table;
