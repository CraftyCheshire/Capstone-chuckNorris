import React from "react";
import "./App.css";
import CustomNavbar from "./navbar.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Chuckinator = () => {
  return (
    <div id="indexBody">
      <section className="navbar">
        <CustomNavbar />
      </section>

      <div className="hero-image">
        <div className="hero-text">
          <h1>Chuck Norris</h1>
          <p>American Hero</p>
          <button type="button" className="btn btn-warning">
            <Link to="/chuck">Let's play</Link>
          </button>
        </div>
      </div>

      <h2 className="container">
        Have you ever been to a party that was fabulous but missing something? I
        bet that something was Chuck Norris! Spruce up any party with the new
        Chuckinator&trade;. Simply navigate to our "Chuck" page by clicking
        "Let's play" in the photo above. Once you're on the Chuck page, click
        "Hee-yah!" for a joke to pop up that's sure to have your entire party in
        stitches.
      </h2>

      <section className="subscribe">
        <h4 className="container" id="signUp">
          Sign up for more <br />
          Chuck Norris
        </h4>

        <form className="container">
          <div id="infoBox" className="container">
            <label htmlFor="firstName">First Name:</label>
            <br />
            <input type="text" id="firstName" name="firstName" />
            <br />

            <label htmlFor="lastName">Last Name:</label>
            <br />
            <input type="text" id="lastName" name="lastName" />
            <br />

            <label htmlFor="email">Email:</label>
            <br />
            <input type="email" id="email" name="email" />
            <br />
          </div>
          <button
            type="button"
            className="btn btn-success"
            id="subscribeBtn"
            onClick={() => alert("Subscribed!")}
          >
            Subscribe!
          </button>
        </form>
        <p id="subscribe"></p>
      </section>

      <footer>
        <p>Created by: Vann DaMann 2025</p>
      </footer>
    </div>
  );
};

export default Chuckinator;
