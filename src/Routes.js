import React, { useEffect, useState } from "react";
import { useLocation, Navigate, BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Main from "./pages/main";
import Register from "./pages/register";
import Projeto from "./pages/projeto";
import { UserAuth } from "./context/authcontext";

const RotasWrapper = () => {
    const { user } = UserAuth();
    const [authenticationChecked, setAuthenticationChecked] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setAuthenticationChecked(true);

        window.onbeforeunload = () => {
            localStorage.setItem("previousPath", location.pathname);
        };

        return () => {
            window.onbeforeunload = null;
        };
    }, [location.pathname]);


    if (!authenticationChecked) {
        // Aguarda a verificação de autenticação antes de renderizar as rotas
        return null;
    }

    const previousPath = localStorage.getItem("previousPath");
    localStorage.removeItem("previousPath");

    if (previousPath && !user) {
        return <Navigate to={previousPath} replace />;
    }


    return (
        <Routes>
            <Route
                path="/"
                element={user ? <Navigate to={"/index"} replace /> : <Login />}
            />
            <Route path="/index" element={user ? <Main /> : <Navigate to={"/"} replace />} />
            <Route
                path="/projeto"
                element={user ? <Projeto /> : <Navigate to={"/"} replace />}
            />
            <Route
                path="/register"
                element={user ? <Navigate to={"/index"} replace /> : <Register />}
            />
            {user && !authenticationChecked && (
                <Navigate to={location.pathname} replace state={location.state} />
            )}
        </Routes>
    );
};

const Rotas = () => {
    return (
        <BrowserRouter>
            <RotasWrapper />
        </BrowserRouter>
    );
};

export default Rotas;