import React from 'react';
import { NUM_OF_LETTERS_ALLOWED } from '/src/constants.js';

function GuessForm({ submitGuess, gameStatus }) {
  const [guessTentative, setGuessTentative] = React.useState('');

  return (
    <>
      <form
        className='guess-input-wrapper'
        onSubmit={(e) => {
          e.preventDefault();
          submitGuess(guessTentative);
          setGuessTentative('');
        }}
      >
        <label htmlFor='guess-input'>Enter you guess:</label>
        <input
          id='guess-input'
          required
          disabled={!gameStatus.isRunning}
          type='text'
          title='5 letters word'
          value={guessTentative}
          maxLength={NUM_OF_LETTERS_ALLOWED}
          pattern={`[A-Za-z]{${NUM_OF_LETTERS_ALLOWED}}`} //minLength
          onChange={(e) => setGuessTentative(e.target.value.toUpperCase())}
        />
      </form>
    </>
  );
}

export default GuessForm;
