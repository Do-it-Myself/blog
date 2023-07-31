import React, { lazy, Suspense, createContext } from "react";

import NavBarWide from "./pages/main/navbar/NavBarWide";
import NavBarNarrow from "./pages/main/navbar/NavBarNarrow";
import HomeWithContext from "./pages/main/home/HomeWithContext";
import HardwareWide from "./pages/main/hardware/HardwareWide";
import HardwareNarrow from "./pages/main/hardware/HardwareNarrow";
import SoftwareWide from "./pages/main/software/SoftwareWide";
import SoftwareNarrow from "./pages/main/software/SoftwareNarrow";
import BottomBarWide from "./pages/main/bottombar/BottomBarWide";
import BottomBarNarrow from "./pages/main/bottombar/BottomBarNarrow";
import Loading from "./pages/main/Loading";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import NotFound from "./pages/main/NotFound";

let postJSON = require("./pages/posts/Posts.json");
let routeList = [];

for (let i = 0; i < postJSON.length; i++) {
  const Page = lazy(() =>
    import("./pages/posts" + postJSON[i]["dir"] + "/Page")
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
