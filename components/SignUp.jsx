import { useState } from "react";
import styles from "../styles/Login-Signup.module.css";
import signup from "../pages/api/signup";
import axios from "axios";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/signup", {
        name,
        email,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <input
          className={styles.input}
          placeholder="name"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className={styles.input}
          placeholder="username"
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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

export default SignUp;
