import React, { useState } from "react";
import { Container, Card, Button, Error } from "../styles/Pop_up";
import close from '../Assets/close.svg';
import axios from "axios";
import { UserAuth } from "../context/authcontext";


export const Pop_up = (props) => {
    const {trigger, setTrigger} = props;
    const [form, setForm] = useState("");
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState();

    const { user } = UserAuth();
    const onSubmit = () => {
        if(form === ""){
            setHasError(true);
            setError("Por favor, preencher o campo abaixo!");
        }else{
            setHasError(false);
            axios.post('http://localhost:8080/projeto/add',{
                nome: form,
                iduser: user.iduser
            })
            .then((res) => {
                setTrigger(false);
            })
        }
    }

    return(
        <>
            {trigger ? 
                <Container>
                    <div className="absolute">
                        <Card>
                            <p className="titulo">Nome do Projeto</p>
                            {hasError ? <Error><p>{error}</p></Error> : ""}
                            <input type="text" onChange={(e) => setForm(e.target.value)}/>
                            <Button onClick={onSubmit}>Adicionar</Button>
                            <img src={close} onClick={() => setTrigger(false)}/>
                        </Card>
                    </div>
                </Container>
            : ""}
        </>
    )
}