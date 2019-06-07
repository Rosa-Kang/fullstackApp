import React, { Component } from "react";
import Likes from "../assets/icon/SVG/heart.png";
import PopUp from "../components/PopUp";
import Save from "../assets/icon/SVG/saved.png";

const PopupCtrl = ({
  onClose,
  show,
  content,
  title,
  image,
  profile,
  username,
  likes
}) => {
  if (!show) {
    return null;
  }
  console.log(title);
  return (
    <div className="modal">
      <button onClick={onClose}>X</button>
      <section className="modal__main">
        <div className="modal__main--flex">
          <div className="modal__main--flex--profile">
            <img src={profile} id="profile" />
            <h5>{username}</h5>
          </div>
          <div className="modal__main--flex--likes">
            <img id="heart" src={Likes} alt="likes" />
            <span>{likes}</span>
          </div>
        </div>
        <div className="modal__main--thumb">
          <img id="thumb" src={image} />
          <div className="modal__main--thumb--text">
            <h2>{title}</h2>
            <img id="save" src={Save} alt="save" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopupCtrl;
