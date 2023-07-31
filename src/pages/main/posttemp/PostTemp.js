import React, { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import { NarrowContext } from "../../../App";

import ListItem from "../ListItem";
let postJSON = require("../../posts/Posts.json");

export default function PostTemp({ content, next, children }) {
  const isSmall = useMediaQuery({ query: "(max-width: 550px)" });
  const { homeIsNarrow } = useContext(NarrowContext);

  return (
    <div className={homeIsNarrow ? "posttempNarrow" : "posttempWide"}>
      <div className="postflex">
        <div className="postbox">
          <div className="posttitle">{content["title"]}</div>
          <div className="postsummary">{content["summary"]}</div>
          <div className="postdate">{content["date"]}</div>
          <div className="imageflex">
            <img
              src={require("../../posts" + content["dir"] + "/main.jpg")}
              alt="main"
              className="image"
            />
          </div>
          <div className="children">{children} </div>
        </div>
        <div className="readmore">Read more</div>
        <div className={isSmall ? "postSmall" : ""}>
          <ListItem key={postJSON[next[0]]["id"]} content={postJSON[next[0]]} />
          <ListItem key={postJSON[next[1]]["id"]} content={postJSON[next[1]]} />
        </div>
      </div>
    </div>
  );
}
