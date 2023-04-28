import { useState } from "react";
import styles from "../styles/Login-Signup.module.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/login", { email, password });
      console.log(response.data);
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
          value={email}
          placeholder="Username"
          onChange={(e) => setEmail(e.target.value)}
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
      </form>
    </div>
  );
}

export default Login;
