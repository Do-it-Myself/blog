import React, {useContext} from "react";
import { NarrowContext } from "src/App";
import { CircularProgress } from "@mui/material";

export default function Loading() {
  const { homeIsNarrow } = useContext(NarrowContext);

  return (
    <div className="loading">
      <div className={homeIsNarrow ? "loadingNarrow" : "loadingWide"}>
        <CircularProgress className="circularProgress"/>
      </div>
    </div>
  );
}
