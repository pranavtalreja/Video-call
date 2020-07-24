import React, { useEffect, useState } from "react";
import { FunctionComponent } from "react";
import Footer from "./footer";
import Navigator from "./navigator";
import { useParams } from "react-router-dom";

const Register: FunctionComponent = () => {
  let { id } = useParams();
  const [postition, decider] = useState("member");
  const [userNames, finder] = useState("");
  const [userName, checker] = useState("");
  const [data, finders] = useState({ username: false });
  const [password, setter] = useState("");
  const [check, checkSetter] = useState("");
  const [value, changer] = useState("");
  useEffect(() => {
    fetch("http://localhost:1234/register/error").then((e) =>
      e.text().then((e) => changer(e))
    );
    fetch(`http://localhost:1234/search/data/${userName}`).then((e) =>
      e.json().then((e) => finders(e))
    );
    fetch(`http://localhost:1234/user/name`)
      .then((e) => e.text())
      .then((e) => finder(e));
  }, [userName]);
  return (
    <div>
      <Navigator username={userNames}></Navigator>
      <main className="page contact-page">
        <section className="portfolio-block contact">
          <div className="container">
            <div className="heading">
              <h2>Registeration</h2>
            </div>
            <form method="POST" action="http://localhost:1234/user">
              {id ? (
                <div>
                  <h4>{value}</h4>
                </div>
              ) : (
                <div></div>
              )}
              <div className="form-group">
                <label htmlFor="name">name</label>
                <input
                  required
                  className="form-control item"
                  type="text"
                  id="name"
                  name="name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">phone number</label>
                <input
                  required
                  className="form-control item"
                  type="number"
                  id="name"
                  name="phoneNumber"
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Email</label>
                <input
                  required
                  className="form-control item"
                  type="email"
                  id="name"
                  name="email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">
                  user name -
                  {data.username ? (
                    <div>this user name can not be used</div>
                  ) : (
                    <div>this username can be used</div>
                  )}
                </label>
                <input
                  required
                  className="form-control item"
                  type="text"
                  id="name"
                  name="userName"
                  value={userName}
                  onChange={(e) => checker(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="position">Position</label>
                <br></br>
                <select
                  id="position"
                  value={postition}
                  onChange={(e) => decider(e.target.value)}
                  onBlur={(e) => decider(e.target.value)}
                >
                  <option>presenter</option>
                  <option>member</option>
                  <option>organiser</option>
                  <option>other</option>
                </select>
              </div>
              {postition == "other" ? (
                <div className="form-group">
                  <label htmlFor="other">other</label>
                  <input
                    required
                    className="form-control item"
                    type="text"
                    id="other"
                    name="other"
                  />
                </div>
              ) : (
                <div></div>
              )}
              <input name="profession" value={postition} hidden></input>
              <div className="form-group">
                <label htmlFor="subject">Password</label>
                <input
                  required
                  className="form-control item"
                  type="password"
                  id="subject"
                  name="password"
                  value={password}
                  onChange={(e) => setter(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">confirm password</label>
                <input
                  required
                  className="form-control item"
                  type="password"
                  id="subject"
                  onChange={(e) => checkSetter(e.target.value)}
                />
              </div>
              {postition == "organiser" ||
              postition == "member" ||
              postition == "presenter" ||
              postition == "other" ? (
                <div className="form-group">
                  <label htmlFor="message">
                    Please mention your event details
                  </label>
                  <textarea
                    className="form-control item"
                    id="message"
                    name="forCheck"
                    required
                  ></textarea>
                </div>
              ) : (
                <div></div>
              )}
              <div className="form-group">
                {check == password ? (
                  data.username ? (
                    <div>
                      Please try another username as this already exits
                      <br></br>
                      <button
                        className="btn btn-primary btn-block btn-lg"
                        type="submit"
                        disabled
                      >
                        Submit Form
                      </button>
                    </div>
                  ) : (
                    <button
                      className="btn btn-primary btn-block btn-lg"
                      type="submit"
                    >
                      Submit Form
                    </button>
                  )
                ) : (
                  <div>
                    passwords do not match please check them again
                    <br></br>
                    <button
                      className="btn btn-primary btn-block btn-lg"
                      type="submit"
                      disabled
                    >
                      Submit Form
                    </button>
                  </div>
                )}
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
};
export default Register;
