import React, { useState, useRef } from "react";
import { Container, Card, Button, Error, Card_Add, Block_Form } from "../styles/Pop_up";
import close from '../Assets/close.svg';
import schedule from '../Assets/schedule.svg';
import add from '../Assets/add.svg';
import del from '../Assets/delete.svg';
import axios from "axios";
import { UserAuth } from "../context/authcontext";
import ScrollableFeed from "react-scrollable-feed";


export const Pop_up = (props) => {
    const { idprojeto, trigger, setTrigger, type_tarefa } = props;
    const [form, setForm] = useState("");
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState();
    const [formCheck, setFormCheck] = useState([]);
    const [inputCheck, setInputCheck] = useState();
    const [isAddCheck, setIsAddCheck] = useState(false);

    const { user } = UserAuth();
    const dummy = useRef();

    const onSubmit = () => {
        if (form === "") {
            setHasError(true);
            setError("Por favor, preencher o campo abaixo!");
        } else {
            setHasError(false);
            axios.post('http://localhost:8080/projeto/add', {
                nome: form,
                iduser: user.iduser
            })
                .then((res) => {
                    setTrigger(false);
                })
                .catch(function (error) {
                    // manipula erros da requisição
                    console.error(error);
                })
        }
        setForm("");
    }

    const addCheck = (e) => {
        if (formCheck === "") {
            return
        } else {
            setFormCheck([...formCheck, { id: crypto.randomUUID(), nome: inputCheck }]);
            document.getElementById("add_check").value = ""
        }
    }

    const onSubmitCheck = () => {
        if (formCheck === "" || form === "") {
            setHasError(true);
            setError("Por favor, preencher o campo abaixo!");
        } else {
            setHasError(false);
            axios.post("http://localhost:8080/projeto/tarefa", {
                idprojeto: idprojeto,
                nome: form,
                date: "9999-12-31 23:59:59",
                checklist: formCheck,
                status: type_tarefa
            })
                .then((res) => {
                    setTrigger(false);
                    setFormCheck([]);
                    setForm("");
                    setHasError(false);
                    setIsAddCheck(false);
                })
        }
    }

    const handleDeleteCheck = (id) => {
        setFormCheck(formCheck.filter(formCheck => formCheck.id !== id))
    }

    return (
        <>
            {trigger ?
                <Container>
                    <div className="absolute">
                        {props.type === "projeto" ? <Card>
                            <p className="titulo">Nome do Projeto</p>
                            {hasError ? <Error><p>{error}</p></Error> : ""}
                            <input type="text" onChange={(e) => setForm(e.target.value)} />
                            <Button onClick={onSubmit}>Adicionar</Button>
                            <img src={close} onClick={() => setTrigger(false)} />
                        </Card>
                            :
                            ""
                        }
                        {props.type === "add_tarefa" ?
                            <Card_Add>
                                <p className="titulo">Adicionar Tarefa</p>
                                {hasError ? <Error><p>{error}</p></Error> : ""}
                                <Block_Form>
                                    <ScrollableFeed className="scroll">
                                        <div className="nome_tarefa">
                                            <p className="label">Nome</p>
                                            <input type="text" placeholder="Nome da Tarefa" onChange={(e) => setForm(e.target.value)} />
                                        </div>
                                        <div className="date">
                                            <img src={schedule} />
                                            <p>18 de Mai</p>
                                        </div>
                                        <div className="header_checklist">
                                            <p>Check-list</p>
                                            <img className="icon_check" src={add} onClick={() => { setIsAddCheck(true); }} />
                                        </div>
                                        <div className="block_checklist">
                                            {formCheck?.map((e) => (
                                                <div className="check_list">
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#147EFB" height="48" viewBox="0 96 960 960" width="48"><path d="M180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600V276H180v600Z" /></svg>
                                                        <p>{e.nome}</p>
                                                    </div>
                                                    <div onClick={() => handleDeleteCheck(e.id)}>
                                                        <svg className="dele" xmlns="http://www.w3.org/2000/svg" fill="#147EFB" height="48" viewBox="0 96 960 960" width="48"><path d="M261 936q-24.75 0-42.375-17.625T201 876V306h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438V306ZM367 790h60V391h-60v399Zm166 0h60V391h-60v399ZM261 306v570-570Z" /></svg>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </ScrollableFeed>
                                </Block_Form>
                                <div style={{ width: "100%", paddingBottom: "5px" }}>
                                    {isAddCheck ?
                                        <>
                                            <div className="add_check">
                                                <input type="text" placeholder="Adicionar Check" id="add_check" onChange={(e) => setInputCheck(e.target.value)} />
                                                <div>
                                                    <button onClick={addCheck}>Adicionar</button>
                                                    <p onClick={() => setIsAddCheck(false)}>Cancelar</p>
                                                </div>
                                            </div>
                                        </>
                                        :
                                        ""
                                    }
                                </div>
                                <div>
                                    <Button onClick={onSubmitCheck}>Criar</Button>
                                </div>
                                <img className="close" src={close} onClick={() => {
                                    setTrigger(false);
                                    setFormCheck([]);
                                    setForm("");
                                    setHasError(false);
                                    setIsAddCheck(false);
                                }} />
                            </Card_Add>
                            :
                            ""
                        }
                        {props.type === "view_tarefa" ?
                            <Card>
                                <p className="titulo">Nome do Projeto</p>
                                {hasError ? <Error><p>{error}</p></Error> : ""}
                                <input type="text" onChange={(e) => setForm(e.target.value)} />
                                <Button onClick={onSubmit}>Adicionar</Button>
                                <img src={close} onClick={() => setTrigger(false)} />
                            </Card>
                            :
                            ""
                        }
                    </div>
                </Container>
                : ""}
        </>
    )
}