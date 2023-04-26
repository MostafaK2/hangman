import React from "react";
import styles from "../styles/Keyboard.module.css";
const KEYS = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["z", "x", "c", "v", "b", "n", "m"],
];
export default function Keyboard({
  
  addGuessLetter,
  correct,
  incorrect,
}) {
  console.log("correct: ", correct);
  console.log("incorrect: ", incorrect);
  return (
    <div className={styles.parent}>
      {KEYS.map((elem) => {
        return (
          <div className={styles.child}>
            {elem.map((key) => {
              const isActive = correct.includes(key);
              const isDisabled = incorrect.includes(key);
              return (
                <button
                  onClick={() => addGuessLetter(key)}
                  className={`${styles.btn} ${isActive ? styles.active : ""} ${
                    isDisabled ? styles.inactive : ""
                  }`}
                  key={key}
                  disabled={isActive || isDisabled}
                >
                  {key}
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
