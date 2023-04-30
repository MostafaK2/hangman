import React from "react";

import styles from "../styles/Hangman.module.css";

const HEAD = <div className={styles.head} />;
const BODY = <div className={styles.body} />;
const LEFT_ARM = <div className={styles.leftarm} />;
const RIGHT_ARM = <div className={styles.rightarm} />;
const LEFT_LEG = <div className={styles.leftleg} />;
const RIGHT_LEG = <div className={styles.rightleg} />;
const HANGMAN = [HEAD, BODY, LEFT_ARM, RIGHT_ARM, LEFT_LEG, RIGHT_LEG];

export default function HangmanDrawing({ incorrect }) {
  return (
    <div style={{ position: "relative", alignItems: "center" }}>
      {HANGMAN.slice(0, incorrect.length)}
      <div className={styles.noose2} />
      <div className={styles.noose1} />
      <div className={styles.stand} />
      <div className={styles.base} />
    </div>
  );
}
