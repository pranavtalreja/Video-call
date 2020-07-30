import React, { useState, useEffect } from "react";
import { FunctionComponent } from "react";
import Footer from "./footer";
import Navigator from "./navigator";

const Schedule: FunctionComponent = () => {
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
        <div>
          <div>
            <br></br>
          </div>
          <div>move to the login page and login to continue</div>
        </div>
      )}
      <Footer></Footer>
    </div>
  );
};

export default Schedule;
