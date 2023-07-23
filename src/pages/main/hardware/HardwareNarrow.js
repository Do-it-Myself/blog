import React from "react";
import FlatList from "flatlist-react";

import ListItem from "../ListItem";
import HardwareImage from "../../../assets/images/hardware.png";
import postJSON from "../../posts/Posts.json";

const postList = postJSON.filter((post) => post["category"] === "hardware");

const renderListItem = (content) => {
  return <ListItem key={content["id"]} content={content} />;
};

export default function Hardware() {
  return (
    <div className="listNarrow">
      <div className="title">Hardware</div>
      <div className="imageCentre">
        <img src={HardwareImage} alt="hardware" className="image" />
      </div>
      <div className="list">
        <FlatList list={postList} renderItem={renderListItem} />
      </div>
      <div className="bottombarMarginNarrow"></div>
    </div>
  );
}
