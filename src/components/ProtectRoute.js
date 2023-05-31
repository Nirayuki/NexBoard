import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({component: component, ...rest}) => {
    const auth = localStorage.getItem("user");
    return auth ? <Outlet/> : <Navigate to="/login"/>
};