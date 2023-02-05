import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { GetContext } from "../../Context";

const SellerProtectedRoutes = () => {
  const { AppState } = GetContext();
  if (
    AppState.user === null ||
    AppState.user === undefined ||
    AppState.user.isSeller === false ||
    AppState.user.isAdmin === false
  ) {
    return <Navigate to="/" />;
  }
  return (
    <>
      {" "}
      <Outlet />{" "}
    </>
  );
};

export default SellerProtectedRoutes;
