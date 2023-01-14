import React, { useState } from "react";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
       console.log(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </label>
      <br />
      <button type="submit">Log in</button>
      {/* <p>Not registered yet? <a style="color:red" href="/register">Register Now!</a></p> */}
    </form>
  );
}
