import React from "react";
import "./../SCSS/_videoLogs.scss";
import ReactPlayer from "react-player/youtube";

function VideoLogs({ videoLogsData }) {
  return (
    <div className="container-fluid videoLogs__container">
      <div className="videoLogs__block">
        <div className="section__title__block">
          <p className="section__title">How to Video Logs</p>
          <button className="viewall__button">View All</button>
        </div>
        <div className="row videoLogs__row">
          {videoLogsData.map((videoLogs, videoLogsIndex) => {
            return (
              <div
                key={videoLogs.id}
                className="col-6 col-md-4 col-lg-2 videoLogs"
              >
                <div className="videoLogs__image__block">
                  <ReactPlayer
                    className="video"
                    url="https://www.youtube.com/watch?v=zTMOrUulS8s"
                    width="100%"
                    height="100%"
                    controls={false}
                  />
                </div>
                <p className="videoLogs__title">{videoLogs.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default VideoLogs;
