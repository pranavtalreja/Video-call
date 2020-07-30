import { FunctionComponent, useState, useEffect } from "react";
import { render } from "react-dom";
import { useParams } from "react-router-dom";
import React from "react";

const extra = () => {};
const EditModal: FunctionComponent = (props) => {
  let { id } = useParams();
  const [privacy, privated] = useState("");
  const [userNames, finder] = useState("");
  const [userName, checker] = useState("");
  const [data, finders] = useState({
    username: false,
  });
  const [password, setter] = useState("");
  const [check, checkSetter] = useState("");
  const [value, changer] = useState("");
  useEffect(() => {
    fetch("/register/error").then((e) => e.text().then((e) => changer(e)));
    fetch(`/search/data/${userName}`).then((e) =>
      e.json().then((e) => finders(e))
    );
    fetch(`/user/name`)
      .then((e) => e.text())
      .then((e) => finder(e));
    fetch(`/privacy`)
      .then((e) => e.text())
      .then((e) => privated(e));
  }, [userName]);
  return (
    <div className="container">
      <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4>Edit Your Profile Ove Here And Save The Changes</h4>
            </div>
            <div className="modal-body">
              <form method="POST" action="/update">
                <div className="form-group">
                  <label htmlFor="message">About</label>
                  <textarea
                    className="form-control item"
                    id="message"
                    name="about"
                  ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="name">Privacy</label>
                  <p>
                    PRIVATE indicares alone whereas PUBLIC indicates grouped
                  </p>
                  <input
                    className="form-control item"
                    type="text"
                    id="name"
                    name="privacy"
                    value={privacy}
                    onChange={(e) => privated(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  {privacy == "PUBLIC" ||
                  privacy == "PRIVATE" ||
                  privacy == "" ? (
                    <button
                      className="btn btn-primary btn-block btn-lg"
                      type="submit"
                    >
                      Submit Form
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary btn-block btn-lg"
                      type="submit"
                    >
                      invalid privacy type entered please check
                    </button>
                  )}
                </div>
              </form>
            </div>
            <div className="modals-footer">
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
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

export default EditModal;
