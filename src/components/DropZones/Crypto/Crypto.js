import React, { useRef, useEffect } from "react";

// A drop zone to the right which represents cryptocurrency
const Crypto = (props) => {
  const elCrypto = useRef();
  // useEffect used as document.ready
  useEffect(() => {
    props.update(elCrypto.current);
  });

  return (
    <section
      aria-label="Crypto currency"
      className={`dropzone crypto${props.hover}`}
      ref={elCrypto}
    >
      <h2>Crypto currency</h2>
    </section>
  );
};

export default Crypto;
