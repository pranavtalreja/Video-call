import React, { useEffect, useState } from "react";
import { FunctionComponent } from "react";
import Navigator from "./navigator";
import Footer from "./footer";
import EditModal from "./editModal";
import ProfileModal from "./profileModal";
import background from "./images/avatar.jpg";

const extra = () => {};

const Profile = () => {
  const [data, finder] = useState({
    name: "",
    about: "",
    followers: "",
    username: "",
    following: [],
    profession: "",
    approved: "",
  });
  useEffect(() => {
    fetch(`http://localhost:1234/active/profile`).then((e) =>
      e.json().then((e) => finder(e))
    );
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
              {data.username} {data.profession}{" "}
              {data.profession == "doctor" ? (
                <p>{data.approved}</p>
              ) : (
                <div></div>
              )}
              <p>
                Hello! I am <strong>{data.name}</strong>
                <br></br>
                {data.about}
              </p>
              <a
                className="btn btn-outline-primary"
                role="button"
                href="#"
                type="button"
                className="btn btn-outline-primary btn-sm"
                data-toggle="modal"
                data-target="#myModal"
              >
                edit your profile from here
              </a>
              <br></br>
              <br></br>
              {/*<a
                className="btn btn-outline-primary"
                role="button"
                className="btn btn-outline-primary btn-sm"
                data-toggle="modal"
                data-target="#myModal"
                id=""
              >
                followers - {data.following ? data.following.length : 0}
              </a>
              <a className="btn btn-outline-primary" role="button" href="#">
                following - {data.followers ? data.followers.length : 0}
              </a>*/}
            </div>
          </div>
        </section>
      </main>
      {/*<ProfileModal id={data.following}></ProfileModal>*/}
      <EditModal id={data.following}></EditModal>
      <Footer></Footer>
    </div>
  );
};

export default Profile;
