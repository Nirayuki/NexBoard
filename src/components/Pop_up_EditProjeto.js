import React, { useState } from "react";
import {
    Error, Container, Block_Settings, Button, Card
} from "../styles/Pop_up";

import close from '../Assets/close.svg';
import axios from "axios";
import { useAuth } from "../context/authcontext";
import { useNavigate } from "react-router-dom";

export const Pop_up_EditProjeto = (props) => {

    const { idprojeto, setTrigger, dataProjeto } = props;


    const initialValues = {
        nome: dataProjeto?.nome,
        github: dataProjeto?.github,
        site: dataProjeto?.site
    }

    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState();
    const [formSettings, setFormSettings] = useState(initialValues);
    const [del, setDel] = useState("");

    const navigate = useNavigate();
    const { user, socket } = useAuth();

    const handleSettings = (ev) => {
        const { name, value } = ev.target

        setFormSettings({ ...formSettings, [name]: value });
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            if (del === `${user?.nome}/${dataProjeto?.nome}`) {
                axios.post(`${process.env.REACT_APP_APIPATH}/projeto/delete`, {
                    idprojeto: dataProjeto?.idprojeto
                }).then((res) => {
                    navigate("/");
                })
            } else {
                setHasError(true);
                setError("Credenciais erradas no campo Delete")
            }
        }
    }

    const onSubmitSettings = () => {

        axios.post(`${process.env.REACT_APP_APIPATH}/projeto/update`, {
            nome: formSettings?.nome ? formSettings.nome : dataProjeto?.nome,
            github: formSettings?.github ? formSettings.github : dataProjeto?.github,
            site: formSettings?.site ? formSettings.site : dataProjeto?.site,
            idprojeto: idprojeto
        }).then((res) => {
            setTrigger(false);
            setFormSettings(initialValues);
            setError("");
            setHasError(false);
            setDel("");
            socket.emit('att-list-projeto', idprojeto);
        })
            .catch((error) => {
                console.error(error);
            })

    }


    return (
        <Container>
            <div className="absolute">
                <Card>
                    <div className="titulo_cont">
                        <p className="titulo">Configurações</p>
                        <img src={close} onClick={() => {
                            setTrigger(false);
                            setFormSettings(initialValues);
                            setError("");
                            setHasError(false);
                            setDel("");
                        }} />
                    </div>

                    {hasError ? <Error><p>{error}</p></Error> : ""}
                    <Block_Settings>
                        <div>
                            <span>Nome do Projeto</span>
                            <input name="nome" defaultValue={dataProjeto?.nome} type="text" onChange={handleSettings} />
                        </div>
                        <div>
                            <span>Link Github</span>
                            <input name="github" defaultValue={dataProjeto?.github} type="text" onChange={handleSettings} />
                        </div>
                        <div>
                            <span>Link Site</span>
                            <input name="site" defaultValue={dataProjeto?.site} type="text" onChange={handleSettings} />
                        </div>
                        <div className="delete">
                            <span style={{ color: "red" }}>Deletar Site</span>
                            <p>Digite <b>{user.nome}/{dataProjeto.nome}</b> para deletar o seu projeto</p>
                            <input name="site" type="text" onKeyDown={handleKeyDown} onChange={(e) => setDel(e.target.value)} />
                        </div>
                    </Block_Settings>
                    <Button onClick={onSubmitSettings}>Salvar</Button>
                </Card>
            </div>
        </Container>

    )
}