import React from "react";
import styles from "../styles/Header.module.css";

export default function Header(props) {
  return (
    <div className={styles["parent"]}>
      <h1>Hangman</h1>
      <div className={styles["header-buttons"]}>
        <button className={styles["header-button"]}>Leaderboard</button>
        <button className={styles["header-button"]}>Create Custom Game</button>
        <button className={styles["header-button"]}>
          {" "}
          Settings with Logout
        </button>
        <button className={styles["header-button"]} onClick={props.onClick}>
          Reset Game
        </button>
      </div>
      <h2>Username</h2>
    </div>
  );
}
