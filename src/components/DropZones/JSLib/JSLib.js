import React, { useRef } from "react";

// A drop zone to the left which represents JavaScript libraries
const JSLib = (props) => {
  const elJsLib = useRef();

  // This only returns a DOM element once the component has initiated.
  // I need to call this from Table.js once the user starts dragging a card.
  // console.log(elJsLib.current);
  // console.log(props.elementsOverlap(elJsLib.current, props.cardElement));

  return (
    <section
      aria-label="JavaScript library"
      className={`dropzone jslib`}
      ref={elJsLib}
    >
      <h2>JavaScript library</h2>
    </section>
  );
};

export default JSLib;
