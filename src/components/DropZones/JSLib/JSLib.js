import React, { useRef, useEffect } from "react";

// A drop zone to the left which represents JavaScript libraries
const JSLib = (props) => {
  const elJsLib = useRef();
  // useEffect used as document.ready
  useEffect(() => {
    props.update(elJsLib.current);
  });

  return (
    <section
      aria-label="JavaScript library"
      className={`dropzone jslib${props.hover}`}
      ref={elJsLib}
    >
      <h2>JavaScript library</h2>
    </section>
  );
};

export default JSLib;
