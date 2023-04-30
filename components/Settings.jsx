import React from "react";
import styles from "../styles/Home.module.css";
import btn from "../styles/Header.module.css";
import { useRouter } from "next/router";

export default function Settings({ setDifficulty, diff }) {
  const router = useRouter();
  return (
    <div className={styles.popup}>
      <button
        className={`${styles["btn"]} ${styles["easy"]} ${
          diff === 0 ? styles["active0"] : ""
        }`}
        onClick={() => {
          setDifficulty(0);
        }}
      >
        Easy
      </button>
      <button
        className={`${styles["btn"]} ${styles["medium"]} ${
          diff === 1 ? styles["active1"] : ""
        }`}
        onClick={() => {
          setDifficulty(1);
        }}
      >
        Medium
      </button>
      <button
        className={`${styles["btn"]} ${styles["hard"]} ${
          diff === 2 ? styles["active2"] : ""
        }`}
        onClick={() => {
          setDifficulty(2);
        }}
      >
        Hard
      </button>
      <button
        onClick={() => {
          localStorage.removeItem("user");
          router.back()

        }}
        className={styles.btn}
      >
        Log Out
      </button>
    </div>
  );
}
