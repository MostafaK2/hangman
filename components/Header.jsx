import React from "react";
import styles from "../styles/Header.module.css";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Header({ page, onClick, setOpenSettings }) {
  const router = useRouter();

  return (
    <div className={styles["parent"]}>
      <h1>Hangman</h1>
      <div className={styles["header-buttons"]}>
        {page !== "leaderboard" ? (
          <button
            className={styles["button-28"]}
            onClick={() => router.push("/leaderboard")}
          >
            Leaderboard
          </button>
        ) : (
          <button
            className={styles["button-28"]}
            onClick={() => router.push("/")}
          >
            Game
          </button>
        )}
        <button className={styles["button-28"]}>Create Custom Game</button>

        <button className={styles["button-28"]} onClick={onClick}>
          Reset Game
        </button>
      </div>
      <button
        onClick={() => {
          setOpenSettings(true);
        }}
        className={styles["button-28"]}
      >
        {" "}
        Settings
      </button>
    </div>
  );
}
