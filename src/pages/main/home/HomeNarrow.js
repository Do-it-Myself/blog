import React, { useContext } from "react";
import FlatList from "flatlist-react";

import SubscribeWithContext from "./SubscribeWithContext";
import Modal from "./Modal";
import { HomeContext } from "./HomeWithContext";

import RobotImage from "../../../assets/images/robot.png"

export default function Home() {
  const { message, postList, renderPost } = useContext(HomeContext);

  return (
    <div>
      <Modal response={message} />
      <div className="homeNarrow">
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
                  src={RobotImage}
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
            <SubscribeWithContext />
          </div>
        </div>
      </div>
      <div className="bottombarMarginNarrow"></div>
    </div>
  );
}
