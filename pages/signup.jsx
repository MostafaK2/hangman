import { useState } from "react";
import styles from "../styles/Login-Signup.module.css";
// import signup from "./api/signup";
// import clientPromise from "@/lib/db";
import axios from "axios";

import { useRouter } from "next/router";

function signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/signup", {
        username,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    router.push("/");
    
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>Sign Up</h1>

        <input
          className={styles.input}
          placeholder="username"
          type="text"
          id="email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className={styles.input}
          placeholder="password"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={styles.button} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default signup;
