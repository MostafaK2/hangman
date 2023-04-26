import Hangman from "@/components/Hangman";
import Header from "@/components/Header";
import Keyboard from "@/components/Keyboard";
import styles from "@/styles/Home.module.css";

import React from "react";
import { useState, useCallback } from "react";

const testWord = "patio";

export default function Home() {
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wordToGuess, setWordToGuess] = useState("");

  const addGuessLetter = useCallback(
    (elem) => {
      setGuessedLetters((curr) => [...curr, elem]);
    },
    [guessedLetters]
  );

  // useEffect(() => {
  //   if (guess.length > 0) {
  //     if (testWord.includes(guess)) {
  //       correctGuessedLetters.push(guess);
  //       setCorrectGuessedLetters(correctGuessedLetters);
  //     } else {
  //       incorrectGuesses.push(guess);
  //       setIncorrectGuesses(incorrectGuesses);
  //     }
  //   }
  // });

  return (
    <div className={styles.main}>
      <Header />
      <Hangman />
      <Keyboard
        guess={guessedLetters}
        addGuessLetter={addGuessLetter}
        incorrect={guessedLetters.filter((elem) => !testWord.includes(elem))}
        correct={guessedLetters.filter((elem) => testWord.includes(elem))}
      />
    </div>
  );
}
