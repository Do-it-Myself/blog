import React from "react";
import FlatList from "flatlist-react";

import ListItem from "src/pages/main/ListItem";
import HardwareImage from "src/assets/images/hardware.png";
import postJSON from "src/pages/posts/Posts.json";

const postList = postJSON.filter((post) => post["category"] === "hardware");

const renderListItem = (content) => {
  return <ListItem key={content["id"]} content={content} />;
};

export default function Hardware() {
  return (
    <div className="listWide">
      <div className="horizontalFlexBox">
        <div className="heading">
          <div className="verticalFlexBox">
            <div className="title">Hardware</div>
            <div className="imageCentre">
              <img src={HardwareImage} alt="Robotic arm icons created by Freepik - Flaticon" className="image" />
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
