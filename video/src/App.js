import React from "react";
import "./App.css";
import VideoChat from "./VideoChat";

const App = () => {
  return (
    <div className="app">
      <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-white portfolio-navbar gradient">
        <div className="container">
          <a className="navbar-brand logo" href="/index">
            <img
              src={require(`./images/meeting.png`)}
              width="100"
              height="50"
            ></img>
          </a>
          <button
            data-toggle="collapse"
            className="navbar-toggler"
            data-target="#navbarNav"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item" role="presentation">
                <a className="nav-link" href="http://localhost:5000/index">
                  Homepg{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <h1>blankmesage</h1>
      <br></br>
      <main>
        <VideoChat />
      </main>
      <footer className="page-footer">
        <div className="container">
          <div className="links">
            <a href="http://localhost:5000/">About me</a>
            <a href="http://localhost:5000/privacy">Privacy</a>
            <a href="https://github.com/info-arnav/videoCall">Projects</a>
          </div>
          <div className="social-icons">
            <a href="#">
              <i className="icon ion-social-facebook"></i>
            </a>
            <a href="#">
              <i className="icon ion-social-instagram-outline"></i>
            </a>
            <a href="#">
              <i className="icon ion-social-twitter"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
