import React, { FunctionComponent, useEffect, useState } from "react";
import background from "./images/avatar.jpg";
const Navigator = (params) => {
  let { username } = params;
  const [data, finder] = useState({
    name: "",
    about: "",
    followers: "",
    username: "",
    profession: "",
    privacy: "",
  });
  const [datac, finderc] = useState({
    name: "",
    about: "",
    followers: [],
    username: "",
    following: [],
    profession: "",
    approved: "",
    privacy: "",
  });
  useEffect(() => {
    fetch(`http://localhost:1234/active/profile`).then((e) =>
      e.json().then((e) => finder(e))
    );
  }, []);
  return (
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
              <a className="nav-link" href="/index">
                Home
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link" href="/search">
                Search
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link" href="http://localhost:3000/">
                Meeting
              </a>
            </li>
            {data.profession == "doctor" ? (
              <li className="nav-item" role="presentation">
                <a className="nav-link" href="/edit">
                  Appointments
                </a>
              </li>
            ) : data.profession == "patient" ? (
              <li className="nav-item" role="presentation">
                <a className="nav-link" href="/edit">
                  Make Appointment
                </a>
              </li>
            ) : (
              <div></div>
            )}
            {username ? (
              <li className="nav-item" role="presentation">
                <a className="nav-link" href="/profile">
                  Profile
                </a>
              </li>
            ) : (
              <div></div>
            )}
            {username ? (
              data.privacy == "PRIVATE" ? (
                <li className="nav-item" role="presentation">
                  <a className="nav-link" href="http://slither.io/">
                    Status - Bored
                  </a>
                </li>
              ) : (
                <li className="nav-item" role="presentation">
                  <a className="nav-link" href="http://slither.io/">
                    status-active-no-games
                  </a>
                </li>
              )
            ) : (
              <div></div>
            )}
            {username ? (
              <li className="nav-item" role="presentation">
                <a className="nav-link" href="http://localhost:1234/logout">
                  Logout - {username}
                </a>
              </li>
            ) : (
              <li className="nav-item" role="presentation">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigator;
