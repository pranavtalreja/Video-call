import { FunctionComponent, useState, useEffect } from "react";
import { render } from "react-dom";
import { useParams } from "react-router-dom";
import React from "react";

const extra = () => {};

const PPPProfileModal = (props) => {
  const { id } = props;
  const [datac, finderc] = useState({
    name: "",
    about: "",
    followers: [],
    following: [],
    username: "",
  });
  const [userNames, finder] = useState("");
  const [userName, checker] = useState("");
  const [data, finders] = useState({
    username: false,
  });
  const [password, setter] = useState("");
  const [check, checkSetter] = useState("");
  const [value, changer] = useState("");
  useEffect(() => {
    fetch(`/find/profile/${id}`)
      .then((e) => e.json())
      .then((e) => finderc(e));
    fetch("/register/error").then((e) => e.text().then((e) => changer(e)));
    fetch(`/search/data/${userName}`).then((e) =>
      e.json().then((e) => finders(e))
    );
    fetch(`/user/name`)
      .then((e) => e.text())
      .then((e) => finder(e));
  }, [userName]);
  return (
    <div className="container">
      <div className="modals fade" id="myModals" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4>List of following can be seen over here</h4>
            </div>
            <div className="modal-body">
              {datac.following.map((e) => (
                <div>{e}</div>
              ))}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modals"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PPPProfileModal;
