import React, { useState } from "react";
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

  const updateJsLib = (el) => {
    setJsLibEl(el);
  };

  const updateCrypto = (el) => {
    setCryptoEl(el);
  };

  const cardHover = (el) => {
    elementsOverlap(el, jsLibEl)
      ? setJsLibHoverClass(" hover")
      : setJsLibHoverClass("");
    elementsOverlap(el, cryptoEl)
      ? setCryptoHoverClass(" hover")
      : setCryptoHoverClass("");
  };

  return (
    <main className="table">
      <JSLib update={updateJsLib} hover={jsLibHoverClass} />
      <Crypto update={updateCrypto} hover={cryptoHoverClass} />
      <NewCard cardHover={cardHover} />
    </main>
  );
};

export default Table;
