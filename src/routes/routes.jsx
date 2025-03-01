import React from "react";
import { Routes, Route } from "react-router";
import NotFound from "../pages/not-found";
import ProtectRoute from "./ProtectRoute";
import Login from "../pages/login";
import Landing from "../pages/landig";

function RoutesHandler() {
  return (
    <Routes>
      <Route
        index
        element={
          <ProtectRoute>
            <Landing />/
          </ProtectRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route
        path="/numbers-in-image"
        element={<ProtectRoute>component</ProtectRoute>}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default RoutesHandler;
