import React from "react";
import FlatList from "flatlist-react";

import ListItem from "../ListItem";

const renderListItem = (content) => {
  return <ListItem key={content["id"]} content={content} />;
};

export default function Hardware() {
  let postJSON = require("../../posts/Posts.json");
  const postList = postJSON.filter((post) => post["category"] === "hardware");

  return (
    <div className="listNarrow">
        <div className="title">Hardware</div>
        <div className="imageCentre">
          <img
            src={require("../../../assets/images/hardware.png")}
            alt="hardware"
            className="image"
          />
        </div>
        <div className="list">
          <FlatList list={postList} renderItem={renderListItem} />
        </div>
        <div className="bottombarMarginNarrow"></div>
    </div>
  );
}

