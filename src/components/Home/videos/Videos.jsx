import React from "react";
import { AiFillEye } from "react-icons/ai";

import "./_videos.scss";

const Videos = () => {
  return (
    <div className="video">
      <div className="video__top">
        <img
          src="https://i.ytimg.com/vi/0-S5a0eXPoc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD0A2NDVpDe2skhwaFMuq3SAJmkeQ"
          alt="Thumbnail"
        />
        <span>05:25</span>
      </div>
      <div className="vodeo__title">
        create youtubecolne in 5 min #itna aasan nhi h
      </div>
      <div className="video__details">
        <span>
          <AiFillEye /> 5m views •
        </span>
        <span>5 days ago</span>
      </div>
      <div className="video__channel">
        <img
          src="https://yt3.ggpht.com/ytc/AKedOLSQnPeUQ9rFmkq9oOvnO--vHir9MuJ1SBWWJFx-=s48-c-k-c0x00ffffff-no-rj"
          alt="Channel"
        />
        <p>Tanvir Coder</p>
      </div>
    </div>
  );
};

export default Videos;
