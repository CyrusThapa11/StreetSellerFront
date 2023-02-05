import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { GetContext } from "../../Context";

const AdminProtectedRoutes = () => {
  const { AppState } = GetContext();
  if (
    AppState.user === null ||
    AppState.user === undefined ||
    AppState.user.isSeller === true ||
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

export default AdminProtectedRoutes;
