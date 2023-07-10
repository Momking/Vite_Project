import React from "react";
import { useState } from "react";
import { people } from "../data";

const Login = () => {
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
            type="text"
            value={name}
            className="input"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="id" className="label">
            ID
          </label>
          <input
            type="number"
            value={id}
            className="input"
            onChange={(e) => setId(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <p>Logged In</p>
      )}
    </div>
  );
};

export default Login;
