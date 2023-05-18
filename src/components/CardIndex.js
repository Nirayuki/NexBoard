import React from "react";
import { Card, Block, Icons } from "../styles/CardIndex";
import github from '../Assets/Octicons-mark-github.svg';
import link from '../Assets/link.svg';
import { Link } from "react-router-dom";

export const CardIndex = (props) => {
    return(
        <Card>
            <Link className="div_link" to={`/projeto?id=${props.data.idprojeto}`}></Link>
            <p className="titulo">{props.titulo}</p>
            <Block>
                <span>80%</span>
                <Icons>
                    <img src={github} onClick={() => console.log("Clicou imagem")}/>
                    <img src={link} onClick={() => console.log("Clicou imagem")}/>
                </Icons>
            </Block>
        </Card>
    );
}