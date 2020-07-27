import React, { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="links">
          <a href="/index">About me</a>
          <a href="/privacy">Privacy</a>
          <a href="https://github.com/info-arnav/videoCall">Projects</a>
        </div>
        <div className="social-icons">
          <a href="#">
            <i className="icon ion-social-facebook"></i>
          </a>
          <a href="#">
            <i className="icon ion-social-instagram-outline"></i>
          </a>
          <a href="#">
            <i className="icon ion-social-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
