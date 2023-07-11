import React from "react";
import { useState } from "react";
import { people } from "../data";

const SignIn = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [error, setError] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = people.find((user) => user.name === name);

    if (user && user.id == id) {
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="div1">
      <img
        src="https://cdn-icons-png.flaticon.com/128/4104/4104723.png"
        alt=""
      />
      {error ? (
        <form className="form" onSubmit={handleSubmit}>
          <h1 id="h">Sign In</h1>
          <label htmlFor="name" className="label">
            Name
          </label>
          <input
            aria-label="Enter your Name"
            placeholder="Name"
            type="text"
            value={name}
            className="input"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="id" className="label">
            ID
          </label>
          <input
            aria-label="Enter your Id"
            type="number"
            placeholder="Id"
            value={id}
            className="input"
            onChange={(e) => setId(e.target.value)}
          />
          <button type="submit">Sign In</button>
          <p>
            Are you not LoggedIn ?
            <link to="./signup" id="sign_up">
              Sign Up
            </link>
          </p>
        </form>
      ) : (
        <p>Logged In</p>
      )}
    </div>
  );
};

export default SignIn;
