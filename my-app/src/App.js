import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
// import Header from './components/Header';
import UserPage from "./pages/UserPage";
// import HomePage from "./pages/HomePage"
// import ErrorPage from "./pages/ErrorPage";

export default function App() {
  return (
    <Router>
        {/* <Header /> */}
        <Routes>
          {/* <Route exact path="/" component={HomePage} /> */}
        {/* <Route path="/user/:id" component={UserPage} /> */}
        <Route path="/user/:id" element={<UserPage/>} />
          {/* <Route component={ErrorPage}/> */}
        </Routes>
    </Router>
  );
}

