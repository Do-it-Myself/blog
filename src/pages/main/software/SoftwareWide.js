import React from "react";
import FlatList from "flatlist-react";

import ListItem from "src/pages/main/ListItem";
import SoftwareImage from "src/assets/images/software.png";
import postJSON from "src/pages/posts/Posts.json";

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
              <img src={SoftwareImage} alt="Software icons created by Freepik - Flaticon" className="image" />
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
