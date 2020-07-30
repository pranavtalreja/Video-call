import React, { useEffect, useState } from "react";
import { FunctionComponent } from "react";
import Footer from "./footer";
import Navigator from "./navigator";
import { useParams } from "react-router-dom";

const Login: FunctionComponent = () => {
  let { id } = useParams();
  const [userNames, finder] = useState("");
  let [value, changer] = useState("");
  useEffect(() => {
    fetch("http://localhost:1234/login/error").then((e) =>
      e.text().then((e) => changer(e))
    );
  });
  fetch(`http://localhost:1234/user/name`)
    .then((e) => e.text())
    .then((e) => finder(e));
  return (
    <div>
      <Navigator username={userNames}></Navigator>
      <main className="page contact-page">
        <section className="portfolio-block contact">
          <div className="container">
            <div className="heading">
              <h2>Login</h2>
            </div>
            <form method="POST" action="http://localhost:1234/auth">
              {value ? (
                <div>
                  <h4>the {value} is incorrect</h4>
                </div>
              ) : (
                <div></div>
              )}
              <div className="form-group">
                <label htmlFor="name">Username</label>
                <input
                  required
                  className="form-control item"
                  type="text"
                  id="name"
                  name="userName"
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Password</label>
                <input
                  required
                  className="form-control item"
                  type="password"
                  id="subject"
                  name="password"
                />
              </div>
              <div>
                <a href="/register">
                  are not registered yet ? you can register over here
                </a>
              </div>
              <br></br>
              <div className="form-group">
                <button
                  className="btn btn-primary btn-block btn-lg"
                  type="submit"
                >
                  Submit Form
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
};
export default Login;
