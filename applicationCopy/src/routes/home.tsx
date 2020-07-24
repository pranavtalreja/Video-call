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
    fetch(`http://localhost:1234/user/name`)
      .then((e) => e.text())
      .then((e) => finder(e));
    fetch(`http://localhost:1234/search/data/${value}`)
      .then((e) => e.json())
      .then((e) => setter(e));
    fetch(`http://localhost:1234/`).then((e) => e.text());
    fetch(`http://localhost:1234/follower/boolean`)
      .then((e) => e.json())
      .then((e) => extras(e.array[0].followers));
  }, [value]);
  return (
    <div>
      <Navigator username={userNames}></Navigator>
      {userNames ? (
        <div></div>
      ) : (
        <main className="page lanidng-page">
          <section className="portfolio-block block-intro">
            <div className="container">
              <div className="about-me">
                <h1>About</h1>
                <p>
                  This is a concept through which doctors and patients can
                  interact with each other, make appointments and even see the
                  waiting list
                </p>
                <p>
                  Doctors have a choice wheather they are willing to check all
                  patients or want to make their account private
                </p>
                <p>
                  patients can interact with others check history to check the
                  doctors preference
                </p>
                <p>this help in reduced waiting time too</p>
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
