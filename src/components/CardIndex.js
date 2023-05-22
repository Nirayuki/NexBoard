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
                {props.data.github ? <a href={props.data.github} target="_blank"><img src={github} /></a> : <img src={github} />}
                        {props.data.site ? <a href={props.data.site} target="_blank"><img src={link}  /></a> : <img src={link}  />}
                </Icons>
            </Block>
        </Card>
    );
}