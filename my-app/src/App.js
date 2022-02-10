import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import UserPage from "./pages/UserPage";
import HomePage from "./pages/Home"
import ErrorPage from "./pages/ErrorPage";
import TopBar from "./Navigation/TopBar";
import LeftBar from "./Navigation/LeftBar";

export default function App() {
  return (
    <Router>
      <TopBar />
      <LeftBar />
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/accueil" element={<HomePage/>} />
        <Route path="/user/:id" element={<UserPage/>} />
          <Route path="/ErrorPage" element={<ErrorPage/>}/>
      </Routes>
    </Router>
  );
}

