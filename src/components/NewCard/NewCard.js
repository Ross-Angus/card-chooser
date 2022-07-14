import React from "react";
import Draggable from "react-draggable";
import logoDinero from "../../img/logos/dinero.png";

// Generates a new, draggable card from the bottom of the screen
const NewCard = (props) => {
  const nodeRef = React.useRef(null);

  const choiceHandler = (e, data) => {
    // console.log(data.node);
  };

  const hoverHandler = (e, data) => {
    props.passCardElement(data.node);
  };

  return (
    <Draggable nodeRef={nodeRef} bounds="parent" onDrag={hoverHandler} onStop={choiceHandler}>
      <figure className="card" ref={nodeRef}>
        <p>
          <img src={logoDinero} alt="Dinero" draggable="false" />
        </p>
        <figcaption>
          <a href="https://dinerojs.com/">Dinero</a>
        </figcaption>
      </figure>
    </Draggable>
  );
};

export default NewCard;
