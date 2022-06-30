import React from 'react';

// Welcomes the user, explains the premise.
const NewCard = () => {
  return (
    <figure class="card">
      <p>
        <a href="https://dinerojs.com/">
          <img src="/img/logo/dinero.png" alt="Dinero"/>
        </a>
      </p>
      <figcaption>Dinero</figcaption>
    </figure>
  );
};

export default NewCard;
