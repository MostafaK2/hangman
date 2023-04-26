import { Inter } from "next/font/google";
import Keyboard from "@/components/Keyboard";
import Header from "@/components/Header";
import Hangman from "@/components/Hangman";

import styles from "@/styles/Home.module.css";
import { useCallback, useEffect, useState } from "react";

const testWord = "Patio";

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
        incorrect={guessedLetters.filter((elem)=> !testWord.includes(elem))}
        correct={guessedLetters.filter((elem)=> testWord.includes(elem))}
      />
    </div>
  );
}
