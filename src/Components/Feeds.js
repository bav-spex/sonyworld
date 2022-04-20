import React from "react";
import "./../SCSS/_feeds.scss";
import newsfeed from "./../Assets/Feed/newsfeed.png"
import instafeed from "./../Assets/Feed/instafeed.png"
function Feeds() {
  return (
    <div className="container-fluid feed__container">
      <div className="container feed__block">
        <div className="row feed__row">
          <div className="col-12 col-sm-12 col-md-4 feed">
            <p className="feed__title">Latest News</p>
            <div className="feed__image__block">

            <img src={newsfeed} alt="" className="feed__image" />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 feed">
            <p className="feed__title">Facebook Feeds</p>
            <div className="feed__image__block">

            <div
              className="fb-page facebook__feed__image"
              data-href="https://www.facebook.com/facebook"
              data-tabs="timeline"
              width="100%"
              height="385"
              data-small-header="false"
              data-adapt-container-width="true"
              hide_cover="false"
              data-show-facepile="true"
              data-lazy="true"
            >
              <blockquote
                cite="https://www.facebook.com/facebook"
                className="fb-xfbml-parse-ignore"
              >
                <a href="https://www.facebook.com/facebook">Meta</a>
              </blockquote>
            </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 feed">
            <p className="feed__title">Instagram Feeds</p>
            <div className="feed__image__block">

            <img src={instafeed} alt="" className="feed__image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feeds;
