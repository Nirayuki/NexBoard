import React from "react";
import { Header } from "../styles/DefaultLayout/header";
import logo from '../assets/nexboard.png';

type Props = {
    children: string | React.JSX.Element | React.JSX.Element[]
}

export const DefaultLayout = ({children} : Props) => {
    return(
        <>
            <Header>
                <nav className="container">
                    <div className="logo">
                        <img src={logo}/>
                    </div>
                    <div className="nav">
                        <a href="#">Inicio</a>
                        <a href="#">Projetos</a>
                    </div>
                </nav>
            </Header>
            <div>
                {children}
            </div>
        </>
    )
}