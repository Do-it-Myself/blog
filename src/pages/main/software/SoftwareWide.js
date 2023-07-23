import React from "react";
import FlatList from "flatlist-react";

import ListItem from "../ListItem";
import SoftwareImage from "../../../assets/images/software.png";
import postJSON from "../../posts/Posts.json";

const postList = postJSON.filter((post) => post["category"] === "software");

const renderListItem = (content) => {
  return <ListItem key={content["id"]} content={content} />;
};

export default function Software() {
  return (
    <div className="listWide">
      <div className="horizontalFlexBox">
        <div className="heading">
          <div className="verticalFlexBox">
            <div className="title">Software</div>
            <div className="imageCentre">
              <img src={SoftwareImage} alt="software" className="image" />
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
