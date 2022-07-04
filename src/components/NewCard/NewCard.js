import React from 'react';
import logoDinero from '../../img/logos/dinero.png';

// Welcomes the user, explains the premise.
const NewCard = () => {
  return (
    <figure class="card">
      <p>
        <a href="https://dinerojs.com/">
          <img src={logoDinero} alt="Dinero"/>
        </a>
      </p>
      <figcaption>Dinero</figcaption>
    </figure>
  );
};

export default NewCard;
