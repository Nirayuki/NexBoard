import React from "react";
import Login from "./pages/login";
import Main from "./pages/main";
import Register from "./pages/register";
import Projeto from "./pages/projeto";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { UserAuth } from "./context/authcontext";
import { ProtectedRoute } from "./components/ProtectRoute";


const Rotas = () => {
    const { user } = UserAuth();
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={user ? <Navigate to={"/index"} replace/> : <Login />} />
                <Route path="/index" element={
                    <ProtectedRoute user={user}>
                        <Main />
                    </ProtectedRoute>
                } />
                <Route path="/projeto" element={
                    <ProtectedRoute user={user}>
                        <Projeto />
                    </ProtectedRoute>
                } />
                <Route path="/register" element={user ? <Navigate to={"/index"} replace/> : <Register />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;