import { FunctionComponent, useState, useEffect } from "react";
import { render } from "react-dom";
import { useParams } from "react-router-dom";
import React from "react";

const extra = () => {};

const ProfileModal = (props) => {
  const { id } = props;
  const [datac, finderc] = useState("");
  const [data, findered] = useState("");
  const [userNames, finder] = useState("");
  const [nnid, setter] = useState(id);
  const [extra, extras] = useState([]);
  const [extrat, extrast] = useState([]);
  let lol = "";
  useEffect(() => {
    fetch(`/active/profile`).then((e) => e.json().then((e) => finder(e)));
    fetch(`/find/profile/${id}`)
      .then((e) => e.json())
      .then((e) => finderc(e));
    fetch(`/user/name`)
      .then((e) => e.text())
      .then((e) => findered(e));
    fetch(`/follower/boolean`)
      .then((e) => e.json())
      .then((e) => extras(e.array[0].followers));
  }, []);
  return (
    <div className="container">
      <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4>Information</h4>
            </div>
            <div className="modal-body">
              {id.map((e) => (
                <div>
                  {extra.indexOf(e) != -1 ? (
                    e == data ? (
                      <div>
                        <a href={`/profile/${e}`}>{e}</a>
                        <form action={`/add/unfollower/${e}`} method="POST">
                          <input name="newFollower" type="e" hidden />
                          <button
                            disabled
                            className="btn btn-primary btn-block btn-lg"
                          >
                            this is your id
                          </button>
                        </form>
                      </div>
                    ) : (
                      <div>
                        <a href={`/profile/${e}`}>{e}</a>
                        <form action={`/add/unfollower/${e}`} method="POST">
                          <input name="newFollower" type="e" hidden />
                          <button
                            type="submit"
                            className="btn btn-primary btn-block btn-lg"
                          >
                            Following
                          </button>
                        </form>
                      </div>
                    )
                  ) : (
                    <div>
                      <a href={`/profile/${e}`}>{e}</a>
                      {e == userNames ? (
                        <div></div>
                      ) : (
                        <form action={`/add/follower/${e}`} method="POST">
                          <input name="newFollower" type="e" hidden />
                          <button
                            type="submit"
                            className="btn btn-primary btn-block btn-lg"
                          >
                            Follow
                          </button>
                        </form>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
