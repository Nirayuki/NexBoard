import { Route, Routes } from "react-router";
import Home from "./pages/home";
import LadingPage from "./pages/ladingPage";

export const Rotas = () =>{
    return(
        <Routes>
            <Route path="/" element={<LadingPage/>}/>
        </Routes>
    )
}