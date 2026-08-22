import "./style.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function CurrencyConverter() {

  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("INR");
  const [to, setTo] = useState("USD");
  const [result, setResult] = useState("");

  const rates = {
    INR: 1,
    USD: 0.012,
    EUR: 0.011,
    GBP: 0.009
  };

  const convert = () => {

    
    if (amount === "" || Number(amount) <= 0) {
      alert("Please enter a valid amount");
      setResult("");
      return;
    }

    const inrAmount = Number(amount) / rates[from];
    const converted = inrAmount * rates[to];

    setResult(converted.toFixed(2));
  };

  return (
    <>
      <section className="one">
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#mynavbar"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>

            <div className="collapse navbar-collapse" id="mynavbar">

              <ul className="nav navbar-nav">
                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <Link to="/business">Business</Link>
                </li>

                <li>
                  <Link to="/help">Help</Link>
                </li>

                <li>
                  <Link to="/converter">Currency Converter</Link>
                </li>
              </ul>

              <ul className="nav navbar-nav navbar-right"></ul>

            </div>
          </div>
        </nav>
      </section>

      <div className="converter-container">

        <h2>Currency Converter</h2>

        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <br />
        <br />

        <select
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        >
          <option>INR</option>
          <option>USD</option>
          <option>EUR</option>
          <option>GBP</option>
        </select>

        &nbsp;&nbsp;&nbsp;

        <select
          value={to}
          onChange={(e) => setTo(e.target.value)}
        >
          <option>INR</option>
          <option>USD</option>
          <option>EUR</option>
          <option>GBP</option>
        </select>

        <br />
        <br />

        <button onClick={convert}>
          Convert
        </button>

        <h3>
          Result : {result} {to}
        </h3>

      </div>
    </>
  );
}

export default CurrencyConverter;