import React, {useContext} from "react";
import { NarrowContext } from "../../App";

export default function Loading() {
  const { homeIsNarrow } = useContext(NarrowContext);

  return (
    <div className="loading">
      <div className={homeIsNarrow ? "loadingNarrow" : "loadingWide"}>
        <img
          src={require("../../assets/images/loading.gif")}
          alt="Icon 'loadingcircle' from loading.io"
          className="image"
        />
      </div>
    </div>
  );
}
