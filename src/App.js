import React from "react";

import NavBarWide from "./pages/main/navbar/NavBarWide";
import NavBarNarrow from "./pages/main/navbar/NavBarNarrow";
import HomeWide from "./pages/main/home/HomeWide";
import HomeNarrow from "./pages/main/home/HomeNarrow";
import HardwareWide from "./pages/main/hardware/HardwareWide";
import HardwareNarrow from "./pages/main/hardware/HardwareNarrow";
import SoftwareWide from "./pages/main/software/SoftwareWide";
import SoftwareNarrow from "./pages/main/software/SoftwareNarrow";
import BottomBarWide from "./pages/main/bottombar/BottomBarWide";
import BottomBarNarrow from "./pages/main/bottombar/BottomBarNarrow";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

export default function App() {
  const homeIsNarrow = useMediaQuery({ query: "(max-aspect-ratio: 4/5)" });
  const navBarIsNarrow = useMediaQuery({ query: "(max-width: 390px)" });

  return (
    <Router>
      <div className={homeIsNarrow ? "mainNarrow" : "mainWide"}>
        {!navBarIsNarrow && <NavBarWide />}
        {navBarIsNarrow && <NavBarNarrow />}
        <Switch>
          <Route exact path="/blog">
            {!homeIsNarrow && <HomeWide />}
            {homeIsNarrow && <HomeNarrow />}
          </Route>
          <Route exact path="/blog/hardware">
          {!homeIsNarrow && <HardwareWide />}
            {homeIsNarrow && <HardwareNarrow />}
          </Route>
          <Route exact path="/blog/software">
            {!homeIsNarrow && <SoftwareWide />}
            {homeIsNarrow && <SoftwareNarrow />}
          </Route>
        </Switch>
      </div>
      {!homeIsNarrow && <BottomBarWide />}
      {homeIsNarrow && <BottomBarNarrow />}
    </Router>
  );
}
