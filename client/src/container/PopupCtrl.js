import React from "react";
import Likes from "../assets/icon/SVG/heart.png";
import Save from "../assets/icon/SVG/saved.png";

const PopupCtrl = ({
  id,
  onClose,
  show,
  content,
  title,
  image,
  profile,
  username,
  likes,
  likePhoto
}) => {
  if (!show) {
    return null;
  }
  return (
    <div className="modal">
      <button onClick={onClose}>X</button>
      <section className="modal__main">
        <div className="modal__main--flex">
          <div className="modal__main--flex--profile">
            <img src={profile} id="photographer" alt="profile" />
            <h5>{username}</h5>
          </div>
          <div className="modal__main--flex--likes">
            <img
              id="heart"
              src={Likes}
              alt="likes"
              onClick={() => likePhoto(id)}
            />
            <span>{likes}</span>
            <img id="save" src={Save} alt="save" />
          </div>
        </div>
        <div className="modal__main--thumb">
          <img id="thumb" src={image} alt="thumb" />
          <div className="modal__main--thumb--text">
            <h2>"{title}"</h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopupCtrl;
