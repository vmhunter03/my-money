import { useState } from "react";

//styles
import styles from "./Signup.module.css";

import React from "react";

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, displayName);
  };
  return (
    <form onSubmit={handleSubmit} className={styles[`signup-form`]}>
      <h2>Sign up</h2>
      <label>
        <span>Email:</span>
        <input
          placeholder="email"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <label>
        <span>Display Name:</span>
        <input
          placeholder="name"
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
      <button className="btn">Create Account</button>
    </form>
  );
}
