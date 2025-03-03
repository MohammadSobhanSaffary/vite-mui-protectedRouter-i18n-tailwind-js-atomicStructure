import React from "react";
import Home from "../pages/home";

function ProtectRoute({ children }) {
  const hasAccess = true;

  if (hasAccess) {
    return <>{children}</>;
  }

  return <Home />;
}

export default ProtectRoute;
