import React from "react";
import { Card, Block, Icons } from "../styles/CardIndex";
import github from '../Assets/Octicons-mark-github.svg';
import link from '../Assets/link.svg';
import { Link, useLocation } from "react-router-dom";

export const CardIndex = (props) => {
    const location = useLocation();
    return (
        <Card>
            <Link
                className="div_link"
                to={{
                    pathname: '/projeto',
                    search: `?id=${props.data.idprojeto}`,
                    state: { from: location.pathname }
                }}
            ></Link>
            <p className="titulo">{props.titulo.length > 27 ? props.titulo.slice(0, 27) + "..." : props.titulo}</p>
            <Block>
                <span>{props.data.total_tarefa_concluida > 0 ? `${((props.data.total_tarefa_concluida / props.data.total_tarefa) * 100).toFixed(0)}%` : "0%"}</span>
                <Icons>
                    {props.data.github ? <a href={props.data.github} target="_blank"><img src={github} /></a> : <img src={github} />}
                    {props.data.site ? <a href={props.data.site} target="_blank"><img src={link} /></a> : <img src={link} />}
                </Icons>
            </Block>
        </Card>
    );
}