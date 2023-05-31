import React, { useState } from "react";
import {
    Container, Button, Error, Card_Add, Block_Form
} from "../styles/Pop_up";

import close from '../Assets/close.svg';
import schedule from '../Assets/schedule.svg';
import add from '../Assets/add.svg';

import axios from "axios";
import { useAuth } from "../context/authcontext";
import ScrollableFeed from "react-scrollable-feed";
import { StaticDatePicker } from "@mui/x-date-pickers-pro";

import 'dayjs/locale/pt-br';
import dayjs from "dayjs";


export const Pop_up_AddTarefa = (props) => {
    const { idprojeto, setTrigger, type_tarefa } = props;

    const [form, setForm] = useState("");
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState();

    const [formCheck, setFormCheck] = useState([]);
    const [inputCheck, setInputCheck] = useState();
    const [isAddCheck, setIsAddCheck] = useState(false);

    const [formDate, setFormDate] = useState();
    const [dateOpen, setDateOpen] = useState(false);


    const { user, socket } = useAuth();

    const handleDeleteCheck = (id) => {
        setFormCheck(formCheck.filter(formCheck => formCheck.id !== id))
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            if (inputCheck === undefined || inputCheck === "") {
                return
            } else {
                setFormCheck([...formCheck, { id: crypto.randomUUID(), nome: inputCheck }]);
                document.getElementById("add_check").value = ""
                setInputCheck("");
            }
        }
    }

    const addCheck = (e) => {
        if (inputCheck === undefined || inputCheck === "") {
            return
        } else {
            setFormCheck([...formCheck, { id: crypto.randomUUID(), nome: inputCheck }]);
            document.getElementById("add_check").value = ""
            setInputCheck("");
        }
    }

    const onSubmitCheck = () => {
        axios.post(`${process.env.REACT_APP_APIPATH}/projeto/tarefa`, {
            idprojeto: idprojeto,
            nome: form,
            date: formDate ? dayjs(formDate).format("YYYY-MM-DD HH:mm:ss") : dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss"),
            checklist: formCheck,
            status: "Tarefa",
            checklist_size: formCheck.length,
            checklist_done: 0
        })
            .then((res) => {
                setTrigger(false);
                setFormCheck([]);
                setForm("");
                setHasError(false);
                setIsAddCheck(false);
                setDateOpen(false);
                setFormDate("");
                socket.emit('att-list-tarefa', idprojeto);
            })
            .catch((error) => {
                setHasError(true);
                setError(error.response.data);
                console.error(error);
            })
    }

    return (
        <Container>
            <div className="absolute">
                <Card_Add>
                    <p className="titulo">Adicionar Tarefa</p>
                    {hasError ? <Error><p>{error}</p></Error> : ""}
                    <Block_Form>
                        <ScrollableFeed className="scroll">
                            <div className="nome_tarefa">
                                <p className="label">Nome</p>
                                <input type="text" placeholder="Nome da Tarefa" onChange={(e) => setForm(e.target.value)} />
                            </div>
                            <div className="date" >
                                <img src={schedule} />
                                <p onClick={() => {
                                    setDateOpen(true);
                                }}>{formDate ? dayjs(formDate).format('DD MMM') : "Adicionar Data"}</p>
                                {dateOpen ?
                                    <StaticDatePicker
                                        orientation="portrait"
                                        className="datePicker"
                                        openTo='day'
                                        value={formDate}
                                        onClose={() => {
                                            setDateOpen(false);
                                        }}
                                        onAccept={(e) => {
                                            setFormDate(e);
                                        }}
                                    /> :
                                    ""
                                }
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
                                    <input onKeyDown={handleKeyDown} type="text" placeholder="Adicionar Check" id="add_check" onChange={(e) => setInputCheck(e.target.value)} />
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
                        setDateOpen(false);
                        setFormDate("");
                    }} />
                </Card_Add>
            </div>
        </Container>
    )
}