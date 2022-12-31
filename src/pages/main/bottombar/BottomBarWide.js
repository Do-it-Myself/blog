import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function BottomBar() {
  return (
    <div className="bottombarWide">
      <div className="flexbox">
        <div className="item">Do it Myself</div>
        <div className="item">Made by Chloe</div>
      </div>
    </div>
  );
}
