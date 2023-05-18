import React from "react";
import { Header } from "../styles/defaultLayout";
import { Link } from "react-router-dom";
import config from '../Assets/settings.svg';


export const DefaultLayout = ({ children }) => {
    return (
        <>
            <Header>
                <div className="navigation">
                    <Link>Inicio</Link>
                    <Link>Projetos</Link>
                </div>
                <div className="config">
                    <img src={config} />
                </div>
            </Header>
            <div>
                {children}
            </div>
        </>

    )
}