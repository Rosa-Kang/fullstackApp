import React, { Component } from "react";
import Likes from "../assets/icon/SVG/heart.png";
import PopUp from "../components/PopUp";

const PopupCtrl = ({ onClose, show, content }) => {
  if (!show) {
    return null;
  }
  return (
    <div className="modal">
      <section className="modal-main">
        <h1>{content}</h1>
        <button onClick={onClose}>close</button>
      </section>
    </div>
  );
};

export default PopupCtrl;
