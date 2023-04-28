import Hangman from "@/components/Hangman";
import Header from "@/components/Header";
import Keyboard from "@/components/Keyboard";

import styles from "@/styles/Home.module.css";
import styles2 from "@/styles/Header.module.css";

import React, { useEffect, useInsertionEffect } from "react";
import { useState, useCallback } from "react";
import axios from "axios";

// var testWord = "patiooot";

export default function Home() {
  const [testWord, setTestWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wordToGuess, setWordToGuess] = useState("");
  const [winGame, setWingame] = useState(false);
  const [showKeyboard, setShowKeyboard] = useState(false);

  const handleStartGame = () => {
    setShowKeyboard(true);
    setWingame(false);
    setGuessedLetters([]);
  };

  useEffect(() => {
    const difficulty = ["easy", "medium", "hard"];

    const randIndex = Math.floor(Math.random() * difficulty.length);

    const getRandomWord = async () => {
      const { data } = await axios.get(
        `api/generate-random-word/${difficulty[randIndex]}`
      );
      var lower = data.word.word;
      lower = lower.toLowerCase();
      console.log(lower);
      setTestWord(lower);
    };

    getRandomWord();
  }, []);

  useEffect(() => {
    setWordToGuess(getUniqueChar(testWord));
    console.log("word to guess: " + wordToGuess);
    console.log("test word: " + testWord);
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
    if (str) {
      str = str.toLowerCase();
    }
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

        {showKeyboard && !winGame && incorrectGuesses.length < 6 ? (
          <Keyboard
            guess={guessedLetters}
            addGuessLetter={addGuessLetter}
            incorrect={incorrectGuesses}
            correct={guessedLetters.filter((elem) => testWord.includes(elem))}
            endGame={incorrectGuesses.length > 5 || winGame}
          />
        ) : (
          <button className={styles2["button-28"]} onClick={handleStartGame}>
            {winGame || incorrectGuesses.length > 5
              ? "Play Again"
              : "Start game"}
          </button>
        )}
      </div>
    </div>
  );
}
