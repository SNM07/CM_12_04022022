import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import UserPage from "./pages/UserPage";
import HomePage from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";

const routes = (
  <Routes>
    <Route exact path="/" element={<HomePage />} />
    <Route exact path="/accueil" element={<HomePage />} />
    <Route path="/user/:id" element={<UserPage />} />
    <Route path="/ErrorPage" element={<ErrorPage />} />
    <Route path="*" element={<Navigate replace to="/ErrorPage" />} />
  </Routes>
);

export default routes;
