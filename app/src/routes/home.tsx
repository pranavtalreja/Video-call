import React, { useState, useEffect } from "react";
import { FunctionComponent } from "react";
import Footer from "./footer";
import Navigator from "./navigator";

const Home: FunctionComponent = () => {
  const [extra, extras] = useState("");
  const [userNames, finder] = useState("");
  const [value, changer] = useState("");
  const [array, setter] = useState({
    username: "",
    phone: "",
    name: "",
  });
  useEffect(() => {
    fetch(`/user/name`)
      .then((e) => e.text())
      .then((e) => finder(e));
    fetch(`/search/data/${value}`)
      .then((e) => e.json())
      .then((e) => setter(e));
    fetch(`/`).then((e) => e.text());
    fetch(`/follower/boolean`)
      .then((e) => e.json())
      .then((e) => extras(e.array[0].followers));
  }, [value]);
  return (
    <div>
      <Navigator username={userNames}></Navigator>
      {userNames ? (
        <main className="page lanidng-page">
          <section className="portfolio-block block-intro">
            <div className="container">
              <div className="about-me">
                <h1>About</h1>
                <p>
                  Meeting station is a recently developed and forward looking
                  video calling application. In current times there has been
                  heavy increase in the use of online collaboration tools to
                  boost work from home productivity.
                </p>

                <p>
                  {" "}
                  In current times there has been heavy increase in the use of
                  online collaboration tools to boost work from home.
                </p>
                <p>
                  productivity. Meeting station has compiled these essential
                  tools and added more to make work collab more efficient in a
                  safe platform to ensure the users are mentally healthy.
                </p>
                <p>For Hackathon Team Members Icluded Are -</p>
                <p>Abhinav Prem, Pranav Talreja, Arnav Gupta</p>
              </div>
            </div>
          </section>
        </main>
      ) : (
        <main className="page lanidng-page">
          <section className="portfolio-block block-intro">
            <div className="container">
              <div className="about-me">
                <h1>About</h1>
                <p>
                  Meeting station is a recently developed and forward looking
                  video calling application. In current times there has been
                  heavy increase in the use of online collaboration tools to
                  boost work from home productivity.
                </p>

                <p>
                  {" "}
                  In current times there has been heavy increase in the use of
                  online collaboration tools to boost work from home.
                </p>
                <p>
                  productivity. Meeting station has compiled these essential
                  tools and added more to make work collab more efficient in a
                  safe platform to ensure the users are mentally healthy.
                </p>
                <p>For Hackathon Team Members Icluded Are -</p>
                <p>Abhinav Prem, Pranav Talreja, Arnav Gupta</p>
              </div>
            </div>
          </section>
        </main>
      )}
      <Footer></Footer>
    </div>
  );
};

export default Home;
