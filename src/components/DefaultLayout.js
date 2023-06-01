import React from "react";
import { Header, HamburgerIcon, Sidebar, SidebarItem } from "../styles/defaultLayout";
import { Link } from "react-router-dom";
import config from '../Assets/settings.svg';
import menu from '../Assets/menu.svg';
import home from '../Assets/home.svg';
import off from '../Assets/off.svg';
import { useEffect, useRef } from "react";
import { useState } from "react";


export const DefaultLayout = ({ children }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const sidebarRef = useRef(null);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };


    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setIsSidebarOpen(false);
        }
    };

    useEffect(() => {
        // Adiciona um event listener para o evento 'resize' da janela
        window.addEventListener("resize", handleResize);
        document.addEventListener("mousedown", handleClickOutside);

        // Remove o event listener ao desmontar o componente
        return () => {
            window.removeEventListener("resize", handleResize);
            document.removeEventListener("mousedown", handleClickOutside);
        };

    });

    return (
        <>
            <Header>
                {windowWidth <= 540 ?
                    <HamburgerIcon src={menu} onClick={toggleSidebar} isOpen={isSidebarOpen}/>
                    :
                    <>
                        <div className="navigation">
                            <Link to="/">Projetos</Link>
                        </div>
                        <div className="config">
                            <img src={config} />
                            <img onClick={() => {
                                localStorage.removeItem("user");
                                window.location.reload();
                            }} src={off} />
                        </div>
                    </>
                }
            </Header>
            <div>
                {windowWidth < 540 ?
                    <Sidebar isOpen={isSidebarOpen} ref={sidebarRef}>
                        <Link><img src={home}/> Projetos</Link>
                        <Link><img src={config}/> Configurações</Link>
                        <Link><img src={off}/> Sair</Link>
                    </Sidebar>
                    :
                    ""
                }
                {children}
            </div>
        </>

    )
}