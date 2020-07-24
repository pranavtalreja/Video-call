import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import Home from "./routes/home";
import Edit from "./routes/edit";
import Profile from "./routes/profile";
import RProfile from "./routes/viewProfile";
import Login from "./routes/login";
import Search from "./routes/search";
import Register from "./routes/register";
import ProfileModal from "./routes/profileModal";
import EditModal from "./routes/editModal";
import PrivacyPolicy from "./routes/privacyPolicy";
import Schedule from "./routes/schedule";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path="/app">
        <App />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/index">
        <Home />
      </Route>
      <Route path="/profmod">
        <ProfileModal></ProfileModal>
      </Route>
      <Route path="/search">
        <Search></Search>
      </Route>
      <Route exact path="/login">
        <Login></Login>
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route path="/register/:id">
        <Register />
      </Route>
      <Route exact path="/profile">
        <Profile></Profile>
      </Route>
      <Route path="/profile/:id">
        <RProfile></RProfile>
      </Route>
      <Route path="/edit">
        <Edit></Edit>
      </Route>
      <Route path="/privacy">
        <PrivacyPolicy></PrivacyPolicy>
      </Route>
      <Route path="/schedule">
        <Schedule></Schedule>
      </Route>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
