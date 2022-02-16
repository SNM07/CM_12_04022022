import React from "react";
import { BrowserRouter } from "react-router-dom";
import TopBar from "./Navigation/TopBar";
import LeftBar from "./Navigation/LeftBar";
import routes from "./Routes";

export default function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <LeftBar />
      {routes}
    </BrowserRouter>
  );
}
