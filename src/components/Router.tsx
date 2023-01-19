import { useEffect, lazy } from "react";
import platform from "platform";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Container from "./Container";
import NotFound from "./NotFound";
import Market from "./market/Market";
import AboutUs from "./aboutUs/AboutUs";
import Reference from "./reference/Reference";
import Service from "./service/Service";
import Technology from "./technology/Technology";
import Contact from "./contact/Contact";
import { useSetRecoilState } from "recoil";
import { mobile } from "../atom";

const Main = lazy(() => import("./main/Main"));

const _ = () => {
  const platformProp = platform && platform.os && platform.os.family;
  const setMo = useSetRecoilState(mobile);

  useEffect(() => {
    if (platformProp === "iOS" || platformProp === "Android") {
      setMo("mobile");
    } else {
      setMo("");
    }
  }, [platformProp, setMo]);

  return (
    <>
      <Router>
        <Container>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/reference" element={<Reference />} />
            <Route path="/service" element={<Service />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/market" element={<Market />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </Router>
    </>
  );
};

export default _;
