import React from "react";

export default function Img({ content, image, width }) {
  if (!width) {
    width = "var(--imageWidth)";
  }

  return (
    <div className="imgElementFlex">
      <img
        src={require("src/pages/posts" + content["dir"] + "/pictures/" + image)}
        alt="blog"
        style={{ width: width }}
      />
    </div>
  );
}
