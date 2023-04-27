import React from "react";
import styles from "../styles/Header.module.css";

export default function Header(props) {
  return (
    <div className={styles["parent"]}>
      <h2>username</h2>
      <h1>Hangman</h1>
      <button>Leaderboard</button>
      <button>Create Custom Game</button>
      <button> Settings with Logout</button>
    </div>
  );
}
