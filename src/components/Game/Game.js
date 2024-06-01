import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessForm from '../GuessForm/GuessForm';
import GuessResults from '../GuessResults/GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '/src/constants.js';
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function EndBanner({ hasWon, guessesNb, answer }) {
  const wonContent = (
    <p>
      <strong>Congratulations!</strong> Got it in
      <strong>{guessesNb} guesses</strong>.
    </p>
  );
  const sadContent = (
    <p>
      Sorry, the correct answer is <strong>{answer}</strong>.
    </p>
  );
  return (
    <div className={`banner ${hasWon ? 'happy' : 'sad'}`}>
      {hasWon ? wonContent : sadContent}
    </div>
  );
}

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState({
    isRunning: true,
    hasWon: false,
  });
  const submitGuess = (guessTentative) => {
    const nextGuessList = [...guessList, guessTentative];
    setGuessList(nextGuessList);
    const hasWon = guessTentative.toUpperCase() === answer;
    const isRunning = !hasWon && nextGuessList.length < NUM_OF_GUESSES_ALLOWED;
    setGameStatus({
      isRunning: isRunning,
      hasWon: hasWon,
    });
  };

  return (
    <>
      <GuessResults guessList={guessList} answer={answer} />
      <GuessForm submitGuess={submitGuess} gameStatus={gameStatus} />
      {!gameStatus.isRunning && (
        <EndBanner
          hasWon={gameStatus.hasWon}
          answer={answer}
          guessesNb={guessList.length}
        />
      )}
    </>
  );
}

export default Game;
