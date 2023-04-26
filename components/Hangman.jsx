import React from "react";
import { useState } from "react";

import styles from "../styles/Hangman.module.css"

// drawing
export default function Hangman({ word, correct, incorrect }) {
  word = word.split("");
  return (
    <div>
      <div className={styles.child}>
        {word.map((elem) => {
          var temp = ""
          if(correct.includes(elem)){
            temp = elem
          }
          return (
            <div>
              <div>{temp}</div>
              <div>____</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
