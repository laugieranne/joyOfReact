import React from 'react';
import { range } from '/src/utils.js';
import { NUM_OF_LETTERS_ALLOWED } from '/src/constants.js';
import { checkGuess } from '/src/game-helpers.js';

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : 'cell';
  return <span className={className}>{letter}</span>;
}

function Guess({ guess, answer }) {
  const checkedGuess = guess && checkGuess(guess, answer);
  return (
    <p className='guess'>
      {range(NUM_OF_LETTERS_ALLOWED).map((num) => (
        <Cell
          key={num}
          letter={checkedGuess ? checkedGuess[num].letter : undefined}
          status={checkedGuess ? checkedGuess[num].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
