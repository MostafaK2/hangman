import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Login-Signup.module.css";
import Link from "next/link";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/login", { username, password });
      console.log(response.data);
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          className={styles.input}
          type="text"
          id="email"
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className={styles.input}
          type="password"
          id="password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={styles.button} type="submit">
          Submit
        </button>
        <div className="">
          Do not have an account?{" "}
          <Link href="/signup" className={styles.signup}>
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
