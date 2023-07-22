import React, { lazy, Suspense } from "react";
import FlatList from "flatlist-react";

import ListItem from "../ListItem";

import HardwareImage from "../../../assets/images/hardware.png";

const renderListItem = (content) => {
  return <ListItem key={content["id"]} content={content} />;
};

export default function Hardware() {
  let postJSON = require("../../posts/Posts.json");
  const postList = postJSON.filter((post) => post["category"] === "hardware");

  return (
    <div className="listWide">
      <div className="horizontalFlexBox">
        <div className="heading">
          <div className="verticalFlexBox">
            <div className="title">Hardware</div>
            <div className="imageCentre">
              <img src={HardwareImage} alt="hardware" className="image" />
            </div>
          </div>
        </div>
        <div className="list">
          <FlatList list={postList} renderItem={renderListItem} />
          <div className="bottombarMargin"></div>
        </div>
      </div>
    </div>
  );
}
