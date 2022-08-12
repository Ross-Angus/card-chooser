import React from "react";
import Draggable from "react-draggable";

// Generates a new, draggable card from the bottom of the screen
const NewCard = (props) => {
  const nodeRef = React.useRef(null);
  const [dragPosition, setDragPosition] = React.useState(null);

  const choiceHandler = (e, data) => {
    props.cardDrop(data.node);
    setDragPosition({x: 0, y: 0});
  };

  const hoverHandler = (e, data) => {
    props.cardHover(data.node);
    // Might need to add stuff in here to handle subtle card rotation, table perspective changes etc.
  };

  const card = props.currentCard;

  return (
    <Draggable
      bounds="parent"
      nodeRef={nodeRef}
      onDrag={hoverHandler}
      onStop={choiceHandler}
      position={dragPosition}
    >
      <figure className="card" ref={nodeRef}>
        <p>
          <img src={card.logo} alt={card.name} draggable="false" />
        </p>
        <figcaption>{card.name}</figcaption>
      </figure>
    </Draggable>
  );
};

export default NewCard;
