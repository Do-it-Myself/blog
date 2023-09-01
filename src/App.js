import React, { lazy, Suspense, createContext } from "react";

import NavBarWide from "src/pages/main/navbar/NavBarWide";
import NavBarNarrow from "src/pages/main/navbar/NavBarNarrow";
import HomeWithContext from "src/pages/main/home/HomeWithContext";
import HardwareWide from "src/pages/main/hardware/HardwareWide";
import HardwareNarrow from "src/pages/main/hardware/HardwareNarrow";
import SoftwareWide from "src/pages/main/software/SoftwareWide";
import SoftwareNarrow from "src/pages/main/software/SoftwareNarrow";
import BottomBarWide from "src/pages/main/bottombar/BottomBarWide";
import BottomBarNarrow from "src/pages/main/bottombar/BottomBarNarrow";
import Loading from "src/pages/main/Loading";

import Subscribe from "src/pages/subscribe/Subscribe";
import Unsubscribe from "src/pages/subscribe/Unsubscribe";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import NotFound from "src/pages/main/NotFound";
import ResendEmail from "./pages/subscribe/ResendEmail";

let postJSON = require("src/pages/posts/Posts.json");
let routeList = [];

for (let i = 0; i < postJSON.length; i++) {
  const Page = lazy(() =>
    import("src/pages/posts" + postJSON[i]["dir"] + "/Page")
  );
  const i_nxt = i === postJSON.length - 1 ? 0 : i + 1;
  const i_nxtnxt = i_nxt === postJSON.length - 1 ? 0 : i_nxt + 1;

  const object = {
    page: <Page content={postJSON[i]} next={[i_nxt, i_nxtnxt]} />,
    path: postJSON[i]["dir"],
    id: postJSON[i]["id"],
  };
  routeList.push(object);
}

export const NarrowContext = createContext();

export default function App() {
  const homeIsNarrow = useMediaQuery({ query: "(max-aspect-ratio: 4/5)" });
  const navBarIsNarrow = useMediaQuery({ query: "(max-width: 390px)" });

  return (
    <NarrowContext.Provider value={{ homeIsNarrow, navBarIsNarrow }}>
      <Router basename="/blog">
        <div className={homeIsNarrow ? "mainNarrow" : "mainWide"}>
          {!navBarIsNarrow && <NavBarWide />}
          {navBarIsNarrow && <NavBarNarrow />}
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route exact path="/">
                <HomeWithContext />
              </Route>
              <Route exact path="/hardware">
                {!homeIsNarrow && <HardwareWide />}
                {homeIsNarrow && <HardwareNarrow />}
              </Route>
              <Route exact path="/software">
                {!homeIsNarrow && <SoftwareWide />}
                {homeIsNarrow && <SoftwareNarrow />}
              </Route>

              {routeList.map((post) => (
                <Route key={post.id} exact path={post.path}>
                  {post.page}
                </Route>
              ))}

              <Route path="/subscribe">
                <Subscribe />
              </Route>
              <Route path="/unsubscribe">
                <Unsubscribe />
              </Route>
              <Route path="/resendemail">
                <ResendEmail />
              </Route>

              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Suspense>
        </div>
        {!homeIsNarrow && <BottomBarWide />}
        {homeIsNarrow && <BottomBarNarrow />}
      </Router>
    </NarrowContext.Provider>
  );
}
