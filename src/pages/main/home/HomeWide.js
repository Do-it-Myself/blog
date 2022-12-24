import React from "react";
import FlatList from "flatlist-react";

import Post from "./Post";

const renderPost = (content) => {
  return <Post content={content} />;
};

export default function Home() {
  let postJSON = require("../../posts/Posts.json");
  const postList = [postJSON[6], postJSON[3], postJSON[4], postJSON[2]];

  return (
    <div>
      <div className="homeWide">
        <div className="topbox">
          <div className="flexbox">
            <div className="intro">
              <div className="line1">Hi, welcome to</div>
              <div className="line2">Do it Myself</div>
              <div className="line3">
                I’m Chloe, an engineer who enjoys creating software and hardware
                projects
              </div>
            </div>
            <div className="logoRow">
              <div className="logoCol">
                <img
                  src={require("../../../assets/images/robot.png")}
                  alt="robot"
                  className="image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="thingsDid">
          <div className="verticalFlexBox">
            <div className="horizontalFlexBox">
              <div className="title">Some of the things I did</div>
            </div>
            <div className="horizontalFlexBox">
              <div className="postList">
                <FlatList list={postList} renderItem={renderPost} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}