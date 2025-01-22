import "./App.css";

const Chuckinator = () => {
  return (
    <div id="indexBody">
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

      <div className="hero-image">
        <div className="hero-text">
          <h1>Chuck Norris</h1>
          <p>American Hero</p>
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => (window.location.href = "chuck.html")}
          >
            Let's play
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
            <label>First Name:</label>
            <br />
            <input type="text" id="firstName" name="firstName" />
            <br />

            <label>Last Name:</label>
            <br />
            <input type="text" id="lastName" name="lastName" />
            <br />

            <label htmlFor="email">Email:</label>
            <br />
            <input type="email" id="email" name="email" />
            <br />
          </div>
          <button type="button" className="btn btn-success" id="subscribeBtn">
            Subscribe!
          </button>
        </form>
        <p id="subscribe"></p>
      </section>

      <footer>Created by: Vann DaMann 2025</footer>
    </div>
  );
};

export default Chuckinator;
