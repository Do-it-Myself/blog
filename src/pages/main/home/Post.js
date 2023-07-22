import React from "react";

import { Link } from "react-router-dom";

export default function Post({ content }) {

  const PostImage = require("../../posts" + content["dir"] + "/main.jpg")

  return (
    <div className="postMargin">
      <Link to={content["dir"]} className="button">
        <div className="post">
          <div className="postTitle">{content["title"]}</div>
          <img
            src={PostImage}
            alt="main"
            className="postImage"
          />
        </div>
      </Link>
    </div>
  );
}
