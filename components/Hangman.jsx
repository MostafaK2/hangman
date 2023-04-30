import React from "react";

import styles from "../styles/Hangman.module.css";

const HEAD = <div className={styles.head} />;
const BODY = <div className={styles.body} />;
const LEFT_ARM = <div className={styles.leftarm} />;
const RIGHT_ARM = <div className={styles.rightarm} />;
const LEFT_LEG = <div className={styles.leftleg} />;
const RIGHT_LEG = <div className={styles.rightleg} />;
const HANGMAN = [HEAD, BODY, LEFT_ARM, RIGHT_ARM, LEFT_LEG, RIGHT_LEG];

// drawing
export default function Hangman({ word, correct, incorrect }) {
  word = word && word.split("");

  return (
    <div className={styles.parent}>
      
      <div className={styles.child}>
        {word && word.map((elem) => {
          var temp = "";
          const bool = correct.includes(elem) || incorrect.length > 5;
          if (bool) {
            temp = elem;
          }
          return (
            <div>
              <div
                className={`${styles["box"]} ${
                  correct.includes(elem)
                    ? styles["correct"]
                    : incorrect.length < 6
                    ? ""
                    : styles["incorrect"]
                }`}
              >
                <p>{temp}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
