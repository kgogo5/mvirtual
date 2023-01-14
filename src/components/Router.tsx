import { useState, useEffect, lazy } from "react";
import platform from "platform";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Container from "./Container";
import NotFound from "./NotFound";
import Market from "./market/Market";
import AboutUs from "./aboutUs/AboutUs";
import Reference from "./reference/Reference";
import Service from "./service/Service";
import Technology from "./technology/Technology";

const Main = lazy(() => import("./main/Main"));

const _ = () => {
  const platformProp = platform && platform.os && platform.os.family;
  const [isMobile, setIsMobile] = useState<string>();

  useEffect(() => {
    if (platformProp === "iOS" || platformProp === "Android") {
      setIsMobile("mobile");
    }
  }, [platformProp]);

  return (
    <>
      <Router>
        <Container isMobile={isMobile}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/reference" element={<Reference />} />
            <Route path="/service" element={<Service />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/market" element={<Market />} />

            {/* <Route path="/product">
              <Route
                path="/product/create"
                element={
                  <PrivateRoute>
                    <Create />
                  </PrivateRoute>
                }
              />
            </Route> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </Router>
    </>
  );
};

export default _;
