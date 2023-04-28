import React from "react";
import styles from "../styles/Home.module.css";

export default function Settings({ setDifficulty }) {
  return (
    <div className={styles.popup}>
      <button
        onClick={() => {
          setDifficulty(0);
        }}
      >
        Easy
      </button>
      <button
        onClick={() => {
          setDifficulty(1);
        }}
      >
        Medium
      </button>
      <button
        onClick={() => {
          setDifficulty(2);
        }}
      >
        Hard
      </button>
      <button>Log Out</button>
    </div>
  );
}
