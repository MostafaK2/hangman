import Hangman from "@/components/Hangman";
import Header from "@/components/Header";
import Keyboard from "@/components/Keyboard";
import styles from "@/styles/Home.module.css";

import React, { useEffect, useInsertionEffect } from "react";
import { useState, useCallback } from "react";

var testWord = "patiooot";

export default function Home() {
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wordToGuess, setWordToGuess] = useState("");
  const [winGame, setWingame] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [showKeyboard, setShowKeyboard] = useState(false);

  const handleStartGame = () => {
    setShowKeyboard(true);
  }

  useEffect(() => {
    setWordToGuess(getUniqueChar(testWord));
  }, [testWord]);

  const addGuessLetter = useCallback(
    (elem) => {
      if (!winGame) setGuessedLetters((curr) => [...curr, elem]);
    },
    [guessedLetters]
  );

  const resetGame = useCallback(() => {
    setGuessedLetters([]);
    setWingame(false);
    // fetch the new word based on difficulty
  }, [guessedLetters, winGame]);

  const incorrectGuesses = guessedLetters.filter(
    (elem) => !testWord.includes(elem)
  );

  const correctGuesses = guessedLetters.filter((elem) =>
    testWord.includes(elem)
  );

  const getUniqueChar = (str) => {
    const uniqueChar = new Set(str);
    const charArray = Array.from(uniqueChar);
    return charArray;
  };

  useEffect(() => {
    if (
      wordToGuess.length === correctGuesses.length &&
      wordToGuess.length !== 0
    ) {
      setWingame(true);
    }
  }, [guessedLetters]);

  return (
    <div className={styles.main}>
      <Header onClick={resetGame} />
      <div className={styles.content}>
        <Hangman
          correct={correctGuesses}
          incorrect={incorrectGuesses}
          word={testWord}
          resetGame={resetGame}
        />

        {showKeyboard ? (<Keyboard
          guess={guessedLetters}
          addGuessLetter={addGuessLetter}
          incorrect={incorrectGuesses}
          correct={guessedLetters.filter((elem) => testWord.includes(elem))}
          endGame={incorrectGuesses.length > 5 || winGame}
        />) : (<button className={styles.start} onClick={handleStartGame}>Start game</button>)}
      </div>
    </div>
  );
}
