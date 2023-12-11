import { useEffect, useState } from "react";
import PageNav from "../component/PageNav";

import styles from "./Login.module.css";
import { useAuth } from "../Contexts/AuthContext";
import Button from "../component/Button";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login, IsAuthenticated } = useAuth();
  const [email, setEmail] = useState("joseph@example.com");
  const [password, setPassword] = useState("qwerty");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (email && password) login(email, password);
  }

  useEffect(
    function () {
      if (IsAuthenticated) navigate("/app", { replace: true });
    },
    [IsAuthenticated, navigate]
  );

  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button type="primary">Login</Button>
        </div>
      </form>
    </main>
  );
}
