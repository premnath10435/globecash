import  "./style.css"
import { Link } from "react-router-dom";
import { useState } from "react";

function Logins() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {

    if (email === "premnath10435@gmail.com" && password === "1234") {
      alert("Login Success");
    } else {
      alert("Login Unsuccess");
    }

  };

  return (
    <div className="login-box">

      <h2>Login</h2>
                                   
      <input
      type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="button" onClick={login}>
        Login
      </button>

    </div>
  );
}

export default Logins;