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
    props.cardHover(data.node);
    // Might need to add stuff in here to handle subtle card rotation, table perspective changes etc.
  };

  return (
    <Draggable
      bounds="parent"
      nodeRef={nodeRef}
      onDrag={hoverHandler}
      onStop={choiceHandler}
    >
      <figure className="card" ref={nodeRef}>
        <p>
          <img src={logoDinero} alt="Dinero" draggable="false" />
        </p>
        <figcaption>
          <a href="https://dinerojs.com/" target="_blank" rel="noreferrer">Dinero</a>
        </figcaption>
      </figure>
    </Draggable>
  );
};

export default NewCard;
