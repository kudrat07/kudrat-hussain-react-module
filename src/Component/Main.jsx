/* eslint-disable no-unused-vars */
import React from "react";
import "../Main.css";
import mainLogo from "../assets/mainLogo.png";
import lockLogo from "../assets/Vector.png";

const Main = () => {
  return (
    <>
      <div className="main">
        <div className="c">
          <img className="main__img" src={mainLogo} alt="" />
          <div className="main__text--wrapper">
            <h1 className="main__title">Pocket Notes</h1>
            <p className="main__para">
              Send and receive messages without keeping your phone online. Use
              Pocket Notes on up to 4 linked devices and 1 mobile phone
            </p>
          </div>

          <div className="footer">
            <img className="footer__logo" src={lockLogo} alt="" />
            <p className="footer__para">end-to-end encrypted</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
