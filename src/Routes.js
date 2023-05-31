import React, { useEffect } from "react";
import Login from "./pages/login";
import Main from "./pages/main";
import Register from "./pages/register";
import Projeto from "./pages/projeto";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectRoute";

const Rotas = () => {

    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />


            <Route path="/" element={<ProtectedRoute />}>
                <Route path="/" element={<Main />} />
                <Route path="/projeto" element={<Projeto />} />
            </Route>
        </Routes>
    )
}

export default Rotas;