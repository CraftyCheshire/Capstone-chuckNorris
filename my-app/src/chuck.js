import React from "react";
import "./style.css";

function Chuckinator() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html">
            The Chuckinator
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="index.html"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="chuck.html">
                  Jokes
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Abouts
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="aboutChuck.html">
                      About the Chuckster
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="aboutMe.html">
                      About the Author
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <h1>Chuck Norris</h1>
      <div id="heeyah">
        <button
          type="button"
          className="btn btn-danger"
          id="chuckBtn"
          onClick={() => handleHeeyah()}
        >
          Hee-Yah!
        </button>
        <h6 id="norrisGrandma" className="container"></h6>
      </div>

      <section className="Video Embed">
        <h1>Chuck Norris Grand-Champion Final Match (1966)</h1>
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/nst4V8BKNF0"
          title="Chuck Norris vs. Allen Steen - Grand-Champion Final Match (International 1966)"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </section>
    </>
  );
}

export default Chuckinator;
