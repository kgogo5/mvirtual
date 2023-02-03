import "core-js/stable";
import "regenerator-runtime/runtime";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import Progress from "./components/elements/Progress";
import reportWebVitals from "./reportWebVitals";
import "./i18n";
import { RecoilRoot } from "recoil";

import Router from "./components/Router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <Suspense fallback={<Progress />}>
        <Router />
      </Suspense>
    </RecoilRoot>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
