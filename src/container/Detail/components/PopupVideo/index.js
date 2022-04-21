import React from "react";
import { PopupVideoWrapper } from "./style";
import Button from "../../../../component/Button";

const PopupVideo = ({ statusPopup, video, handleCloseWindow }) => {
  return (
    <PopupVideoWrapper className="popup-wrapper" statusPopup={statusPopup}>
      <div className="btn-popup">
        <h3 className="title-popup">Play Trailer</h3>
        <Button
          className="btn-close-window"
          onClick={handleCloseWindow}
          icon="fas fa-times"
        />
      </div>
      <div className="body-popup">
        <iframe src={video} className="video" />
      </div>
    </PopupVideoWrapper>
  );
};

export default PopupVideo;
