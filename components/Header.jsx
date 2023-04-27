import React from "react";
import styles from "../styles/Header.module.css";
import axios from "axios";
import {useRouter} from 'next/navigation';

export default function Header({page, onClick}) {
    const router = useRouter();

    const routeLeaderboard = async (e) => {
    }

    return (
        <div className={styles["parent"]}>
            <h1>Hangman</h1>
            <div className={styles["header-buttons"]}>
                {page !== 'leaderboard' ?
                    <button className={styles["header-button"]} onClick={() =>
                        router.push('/leaderboard')}>Leaderboard</button> :
                    <button className={styles["header-button"]} onClick={() =>
                        router.push('/')}>Game</button>}
                <button className={styles["header-button"]}>Create Custom Game</button>
                <button className={styles["header-button"]}>
                    {" "}
                    Settings with Logout
                </button>
                <button className={styles["header-button"]} onClick={onClick}>
                    Reset Game
                </button>
            </div>
            <h2>Username</h2>
        </div>
    );
}
