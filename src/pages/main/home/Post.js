import React from "react";

import { Link } from "react-router-dom";

export default function Post({ content }) {

  const PostImage = require("src/pages/posts" + content["dir"] + "/main.jpg")

  return (
    <div className="postMargin">
      <Link to={content["dir"]} className="button">
        <div className="post">
          <div className="postTitle">{content["title"]}</div>
          <img
            src={PostImage}
            alt="postImage"
            className="postImage"
          />
        </div>
      </Link>
    </div>
  );
}
