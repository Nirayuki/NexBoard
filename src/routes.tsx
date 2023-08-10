import { Route, Routes } from "react-router";
import Home from "./pages/home";

export const Rotas = () =>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    )
}