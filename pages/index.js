import { Inter } from "next/font/google";
import Keyboard from "@/components/Keyboard";
import Header from "@/components/Header";
import Hangman from "@/components/Hangman";

import styles from "@/styles/Home.module.css";
import { useCallback, useEffect, useState } from "react";

const testWord = "Patio";

export default function Home() {
  const [correctGuessedLetters, setCorrectGuessedLetters] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState([]);
  const [guess, setGuess] = useState("");

  const [wordToGuess, setWordToGuess] = useState("");

  useEffect(() => {
    if (guess.length > 0) {
      if (testWord.includes(guess)) {
        correctGuessedLetters.push(guess);
        setCorrectGuessedLetters(correctGuessedLetters);
      } else {
        incorrectGuesses.push(guess);
        setIncorrectGuesses(incorrectGuesses);
      }
    }
  });

  return (
    <div className={styles.main}>
      <Header />
      <Hangman />
      <Keyboard
        setGuess={setGuess}
        incorrect={incorrectGuesses}
        correct={correctGuessedLetters}
      />
    </div>
  );
}
