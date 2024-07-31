import React from "react";
import style from "./Gallery.module.css";
import HallPic1 from "../assets/hall5.jpg";
import HallPic2 from "../assets/hall.jpg";
import HallPic3 from "../assets/hall6.jpg";
import HallPic4 from "../assets/hall3.jpg";
import HallPic5 from "../assets/hall2.jpg";
import HallPic6 from "../assets/hall4.jpg";

const Gallery = () => {
  return (
    <div className={style.gallery}>
      <div className={style.leftSide}>
        <div className={style.leftSideUpper}>
          <div className={style.leftSideUpperLeft}>
            <img
              src={HallPic1}
              alt=""
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </div>
          <div className={style.leftSideUpperRight}>
            <img
              src={HallPic2}
              alt=""
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
        <div className={style.leftSideLower}>
          <img
            src={HallPic3}
            alt=""
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
      <div className={style.rightSide}>
        <div className={style.leftSideUpper}>
          <div className={style.leftSideUpperLeft}>
            <img
              src={HallPic4}
              alt=""
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </div>
          <div className={style.leftSideUpperRight}>
            <img
              src={HallPic5}
              alt=""
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
        <div className={style.leftSideLower}>
          <img
            src={HallPic6}
            alt=""
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
