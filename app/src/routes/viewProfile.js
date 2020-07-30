import React, { useEffect, useState } from "react";
import { FunctionComponent } from "react";
import Navigator from "./navigator";
import Footer from "./footer";
import background from "./images/avatar.jpg";
import { useParams } from "react-router-dom";
import ProfileModal from "./profileModal";
import PPPProfileModal from "./profileModalFollowing";

const extra = () => {};

const RProfile = () => {
  let { id } = useParams();
  const [data, finder] = useState({
    name: "",
    about: "",
    followers: "",
    username: "",
  });
  const [datac, finderc] = useState({
    name: "",
    about: "",
    followers: [],
    username: "",
    following: [],
    profession: "",
    approved: "",
  });
  useEffect(() => {
    fetch(`/active/profile`).then((e) => e.json().then((e) => finder(e)));
    fetch(`/find/profile/${id}`)
      .then((e) => e.json())
      .then((e) => finderc(e));
  }, []);
  return (
    <div>
      <Navigator username={data.username}></Navigator>
      <main className="page cv-page">
        <section className="portfolio-block block-intro border-bottom">
          <div className="container">
            <div
              className="avatar"
              style={{ backgroundImage: `url(${background})` }}
            ></div>
            <div className="about-me">
              <h4></h4>
              {datac.username} {datac.profession}{" "}
              {datac.profession == "doctor" ? (
                <p>{datac.approved}</p>
              ) : (
                <div></div>
              )}
              <p>
                Hello! I am <strong>{datac.name}</strong>
                <br></br>
                {datac.about}
              </p>
              <a
                className="btn btn-outline-primary"
                role="button"
                className="btn btn-outline-primary btn-sm"
                data-toggle="modal"
                data-target="#myModal"
              >
                {datac.profession == "orgaiser" ||
                datac.profession == "presentor" ? (
                  <div>
                    list of all members that fllow the leader-{" "}
                    {datac.following ? datac.following.length : 0}
                  </div>
                ) : (
                  <div>
                    the list of all leaders followed by the use-{" "}
                    {datac.followers ? datac.followers.length : 0}
                  </div>
                )}
              </a>
              {/*<a
                className="btn btn-outline-primary"
                role="button"
                className="btn btn-outline-primary btn-sm"
                data-toggle="modal"
                data-target="#myModals"
              >
                following - {datac.followers ? datac.followers.length : 0}
              </a>
              */}
            </div>
          </div>
        </section>
      </main>
      {datac.profession == "doctor" ? (
        <ProfileModal id={datac.following}></ProfileModal>
      ) : (
        <ProfileModal id={datac.followers}></ProfileModal>
      )}
      <Footer></Footer>
    </div>
  );
};

export default RProfile;
