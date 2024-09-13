// Implement a Login Form: Build a login form with validation for email and password fields.
import React, { useState } from "react";

const LogInForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleLogIn = () => {
    setError({ username: "", password: "" });

    if (username.trim() === "") {
      setError({ username: "Please enter valid username" });
      return;
    }

    if (password.length < 6) {
      setError({ password: "Please enter valid password" });
      return;
    }

    setIsSubmitted(true);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>LogInForm</h1>

      {isSubmitted && (
        <div
          style={{ color: "green", marginBottom: "10px", fontSize: "medium" }}
        >
          Successfully logged In!
        </div>
      )}

      <input
        style={{ padding: "4px" }}
        type="text"
        placeholder="Enter a username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <div style={{ height: "20px", color: "red", fontSize: "small" }}>
        {error.username}
      </div>

      <input
        style={{ padding: "4px" }}
        type="text"
        placeholder="Enter a password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div style={{ height: "20px", color: "red", fontSize: "small" }}>
        {error.password}
      </div>

      <button
        style={{
          width: "189px",
          padding: "4px",
          backgroundColor: "blue",
          color: "white",
          border: "2px solid blue",
          borderRadius: "4px",
        }}
        onClick={handleLogIn}
      >
        LogIn
      </button>
    </div>
  );
};

export default LogInForm;
