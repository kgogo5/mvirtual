import { useState, useEffect, lazy } from "react";
import platform from "platform";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Container from "./Container";

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
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Container>
      </Router>
    </>
  );
};

export default _;
