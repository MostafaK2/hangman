import Hangman from "@/components/Hangman";
import Header from "@/components/Header";
import Keyboard from "@/components/Keyboard";

import styles from "@/styles/Home.module.css";
import styles2 from "@/styles/Header.module.css";

import Popup from "reactjs-popup";
import React, { useEffect, useInsertionEffect } from "react";
import { useState, useCallback } from "react";
import axios from "axios";
import Settings from "@/components/settings";
import HangmanDrawing from "@/components/HangmanDrawing";
// import withAuth from "@/components/withAuth";

// var testWord = "patiooot";

function dashboard() {
  const [testWord, setTestWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wordToGuess, setWordToGuess] = useState("");
  const [winGame, setWingame] = useState(false);
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [diff, setDifficulty] = useState(0);
  const [score, setScore] = useState(0);

  const [highScore, setHighScore] = useState(0);
  const [openSettings, setOpenSettings] = useState(false);

  console.log(testWord);
  const difficulty = ["easy", "medium", "hard"];

  const incorrectGuesses = guessedLetters.filter(
    (elem) => !testWord.includes(elem)
  );

  const correctGuesses = guessedLetters.filter((elem) =>
    testWord.includes(elem)
  );

  const scoreCounter = () => {
    if (winGame) {
      var temp = score;
      temp += (diff + 1) * 10;
      setScore(temp);
    }
    if (incorrectGuesses.length > 5) {
      setScore(0);
    }
  };
  console.log(testWord);

  useEffect(() => {
    scoreCounter();
  }, [winGame, incorrectGuesses.length > 5]);

  useEffect(() => {
    setHighScore(score);
    localStorage.setItem("high", score);

    // push into tne leaderboard
  }, [score > highScore]);

  const handleStartGame = () => {
    if (winGame || incorrectGuesses.length > 5) {
      fetchWord(diff);
    }
    setShowKeyboard(true);
    setWingame(false);
    setGuessedLetters([]);
  };

  const fetchWord = async (randIndex) => {
    const { data } = await axios.get(
      `api/generate-random-word/${difficulty[randIndex]}`
    );
    var lower = data.word.word;
    lower = lower.toLowerCase();
    setTestWord(lower);
  };

  useEffect(() => {
    fetchWord(diff);
  }, []);

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
    setScore(0);
    // fetch the new word based on difficulty
    fetchWord(diff);
  }, [guessedLetters, winGame]);

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

  useEffect(() => {
    setGuessedLetters([]);
    setWingame(false);
    fetchWord(diff);
    setOpenSettings(false);
  }, [diff]);

  useEffect(() => {
    scoreCounter();
  }, [winGame]);

  return (
    <div>
      <div className={styles.main}>
        <Header onClick={resetGame} setOpenSettings={setOpenSettings} />
        <div className={styles.content}>
          <HangmanDrawing incorrect={incorrectGuesses} />
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
              // handleGuess={handleGuess}
            />
          ) : (
            <button className={`${styles2["start"]}`} onClick={handleStartGame}>
              {winGame || incorrectGuesses.length > 5
                ? "Play Again"
                : "Start game"}
            </button>
          )}

          <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
            <div className={styles.stats}>{`High Score: ${highScore}`}</div>
            <div className={styles.stats}>{`Score: ${score}`}</div>
            <div
              className={`${styles["stats"]} ${
                diff === 0
                  ? styles.active0
                  : diff === 1
                  ? styles.active1
                  : styles.active2
              }`}
            >{`Difficulty: ${difficulty[diff]}`}</div>
          </div>
        </div>
      </div>

      <Popup
        open={openSettings}
        closeOnDocumentClick
        onClose={() => {
          setOpenSettings(false);
        }}
      >
        <Settings diff={diff} setDifficulty={setDifficulty} />
      </Popup>
    </div>
  );
}

export default dashboard;
