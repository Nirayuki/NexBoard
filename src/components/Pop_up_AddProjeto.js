import React, { useState } from "react";
import {
    Container, Card, Button, Error
} from "../styles/Pop_up";

import close from '../Assets/close.svg';

import axios from "axios";
import { useAuth } from "../context/authcontext";

import 'dayjs/locale/pt-br';



export const Pop_up_AddProjeto = (props) => {

    const { setTrigger, } = props;

    const [form, setForm] = useState("");
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState();

    const { user, socket } = useAuth();


    const onSubmit = () => {
        axios.post(`${process.env.REACT_APP_APIPATH}/projeto/add`, {
            nome: form,
            iduser: user.iduser
        })
            .then((res) => {
                setTrigger(false);
                setForm("");
                socket.emit('list-main', user.iduser);
            })
            .catch(function (error) {
                setHasError(true);
                setError(error.response.data);
                console.error(error);
            })
    }

    return (
        <Container>
            <div className="absolute">
                <Card>
                    <div className="titulo_cont">
                        <p className="titulo">Nome do Projeto</p>
                        <img src={close} onClick={() => setTrigger(false)} />
                    </div>
                    {hasError ? <Error><p>{error}</p></Error> : ""}
                    <input type="text" onChange={(e) => setForm(e.target.value)} />
                    <Button onClick={onSubmit}>Adicionar</Button>

                </Card>
            </div>
        </Container>
    )
}