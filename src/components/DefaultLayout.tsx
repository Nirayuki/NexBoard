import React from "react";
import { Header } from "../styles/DefaultLayout/header";
import logo_blue from '../assets/n-nexboard.png';
import logo_white from '../assets/n-white.png';
import { Link } from "react-router-dom";

type Props = {
    children: string | React.JSX.Element | React.JSX.Element[]
}

export const DefaultLayout = ({children} : Props) => {
    return(
        <>
            <Header>
                <nav className="container">
                    <Link to="/" className="logo">
                        <img src={logo_white}/>
                    </Link>
                    <div className="nav">
                        <Link to="/">Inicio</Link>
                        <a href="https://github.com/Nirayuki?tab=repositories" target="_blank">Projetos</a>
                        <a href="https://nirayuki.netlify.app/#contato" target="_blank">Contato</a>
                    </div>
                    <div className="login">
                        <button>Login</button>
                    </div>
                </nav>
            </Header>
            {children}
        </>
    )
}