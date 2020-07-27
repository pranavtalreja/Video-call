import React, { useEffect, useState } from "react";
import { FunctionComponent } from "react";
import Footer from "./footer";
import Navigator from "./navigator";
import { useParams } from "react-router-dom";

const Search: FunctionComponent = () => {
  const [extra, extras] = useState("");
  const [userNames, finder] = useState("");
  const [value, changer] = useState("");
  const [allValues, setValue] = useState([{ userName: "", profession: "" }]);
  const [array, setter] = useState({ username: "", phone: "", name: "" });
  useEffect(() => {
    fetch(`http://localhost:1234/user/name`)
      .then((e) => e.text())
      .then((e) => finder(e));
    fetch(`http://localhost:1234/search/data/${value}`)
      .then((e) => e.json())
      .then((e) => setter(e));
    fetch(`http://localhost:1234/all/values/${value}`)
      .then((e) => e.json())
      .then((e) => setValue(e));
    fetch(`http://localhost:1234/`).then((e) => e.text());
    fetch(`http://localhost:1234/follower/boolean`)
      .then((e) => e.json())
      .then((e) => extras(e.array[0].followers));
  }, [value]);
  return (
    <div>
      <Navigator username={userNames}></Navigator>
      <main className="page contact-page">
        <br></br>
        <label htmlFor="name">Search</label>
        <div className="form-group">
          <input
            required
            className="form-control item"
            type="text"
            id="name"
            name="name"
            value={value}
            onChange={(e) => changer(e.target.value)}
          />
          {userNames ? (
            <div></div>
          ) : (
            <button className="btn btn-primary btn-block btn-lg" disabled>
              go to the login section and please login to follow someone
            </button>
          )}
          <div>
            <a href={`http://localhost:1234/search/result/${array}`}>
              <h4>
                {array.username == userNames ? <div></div> : array.username}
              </h4>
            </a>
            {allValues.map((e) =>
              e.userName ? (
                e.userName == userNames ? (
                  <div></div>
                ) : userNames ? (
                  extra.indexOf(e.userName) == -1 ? (
                    <form
                      action={`http://localhost:1234/add/follower/${e.userName}`}
                      method="POST"
                    >
                      <a href={`/profile/${e.userName}`}>
                        <h4>
                          {e.userName == userNames ? (
                            <div></div>
                          ) : (
                            <div>
                              {e.userName} - {e.profession}
                            </div>
                          )}
                        </h4>
                      </a>
                      <input name="newFollower" type="e" hidden />
                      <button
                        type="submit"
                        className="btn btn-primary btn-block btn-lg"
                      >
                        Follow
                      </button>
                      <hr></hr>
                    </form>
                  ) : (
                    <form
                      action={`http://localhost:1234/add/unfollower/${e.userName}`}
                      method="POST"
                    >
                      <a href={`/profile/${e.userName}`}>
                        <h4>
                          {e.userName == userNames ? (
                            <div></div>
                          ) : (
                            <div>
                              {e.userName} - {e.profession}
                            </div>
                          )}
                        </h4>
                      </a>
                      <input name="newFollower" type="e" hidden />
                      <button
                        type="submit"
                        className="btn btn-primary btn-block btn-lg"
                      >
                        Following
                      </button>
                      <hr></hr>
                    </form>
                  )
                ) : (
                  <div>
                    <a href={`/profile/${e.userName}`}>
                      <h4>
                        {e.userName == userNames ? (
                          <div></div>
                        ) : (
                          <div>
                            {e.userName} - {e.profession}
                          </div>
                        )}
                      </h4>
                    </a>
                  </div>
                )
              ) : (
                <div></div>
              )
            )}
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Search;
