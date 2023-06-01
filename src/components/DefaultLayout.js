import React from "react";
import { Header } from "../styles/defaultLayout";
import { Link } from "react-router-dom";
import config from '../Assets/settings.svg';
import logout from '../Assets/logout.svg';


export const DefaultLayout = ({ children }) => {
    return (
        <>
            <Header>
                <div className="navigation">
                    <Link to="/">Projetos</Link>
                </div>
                <div className="config">
                    <img src={config} />
                    <img onClick={() => {
                        localStorage.removeItem("user");
                        window.location.reload();
                    }} src={logout}/>
                </div>
            </Header>
            <div>
                {children}
            </div>
        </>

    )
}