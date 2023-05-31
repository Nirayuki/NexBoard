import React, { useState } from "react";
import {
     Error, Container, Block_Settings, Button, Card
} from "../styles/Pop_up";

import close from '../Assets/close.svg';
import axios from "axios";
import { useAuth } from "../context/authcontext";

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

    const { user, socket } = useAuth();

    const handleSettings = (ev) => {
        const { name, value } = ev.target

        setFormSettings({ ...formSettings, [name]: value });
    }

    const onSubmitSettings = () => {
        try {
            axios.post(`${process.env.REACT_APP_APIPATH}/projeto/update`, {
                nome: formSettings?.nome ? formSettings.nome : dataProjeto?.nome,
                github: formSettings?.github ? formSettings.github : dataProjeto?.github,
                site: formSettings?.site ? formSettings.site : dataProjeto?.site,
                idprojeto: idprojeto
            }).then((res) => {
                setTrigger(false);
                setFormSettings(initialValues);
                socket.emit('att-list-projeto', idprojeto);
            })
            .catch((error) => {
                console.error(error);
            })
        } catch (err) {
            console.log(err);
        }
    }
    
    return (
        <Container>
            <div className="absolute">
                <Card>
                    <p className="titulo">Configurações</p>
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
                            <input name="site" defaultValue={dataProjeto?.link} type="text" onChange={handleSettings} />
                        </div>
                    </Block_Settings>
                    <Button onClick={onSubmitSettings}>Salvar</Button>
                    <img src={close} onClick={() => {
                        setTrigger(false);
                        setFormSettings(initialValues);
                    }} />
                </Card>
            </div>
        </Container>

    )
}