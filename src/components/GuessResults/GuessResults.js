import React from 'react';
import Guess from '../Guess/Guess';
import { range } from '/src/utils.js';
import { NUM_OF_GUESSES_ALLOWED } from '/src/constants.js';

function GuessResults({ guessList, answer }) {
  return (
    <div className='guess-results'>
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess
          key={num}
          guess={guessList[num] ? guessList[num] : ''}
          answer={answer}
        />
      ))}
    </div>
  );
}

export default GuessResults;
