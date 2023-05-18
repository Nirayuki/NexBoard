import React from "react";
import { Card, Block, Icons } from "../styles/CardIndex";
import github from '../Assets/Octicons-mark-github.svg';
import link from '../Assets/link.svg';

export const CardIndex = (props) => {

    return(
        <Card>
            <div className="div_link" onClick={() => console.log("clicou div")}></div>
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