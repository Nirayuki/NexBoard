import React, { useState } from "react";
import {
    Block_ViewTarefa, Card_Tarefa,
    Checklist_View, Block_Coment, ContainerObservacao, Error, Container
} from "../styles/Pop_up";

import close from '../Assets/close.svg';
import schedule from '../Assets/schedule.svg';
import add from '../Assets/add.svg';
import del from '../Assets/delete.svg';
import check from '../Assets/check_box_outline.svg';
import account from '../Assets/account_circle.svg'

import axios from "axios";
import { useAuth } from "../context/authcontext";
import { StaticDatePicker } from "@mui/x-date-pickers-pro";

import 'dayjs/locale/pt-br';
import dayjs from "dayjs";


export const Pop_up_ViewTarefa = (props) => {


    const { idprojeto, setTrigger, idtarefa, tarefaData } = props;

    const [form, setForm] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState();

    const [formDate, setFormDate] = useState();
    const [dateOpen, setDateOpen] = useState(false);

    const [formCheck, setFormCheck] = useState([]);
    const [isAddCheck, setIsAddCheck] = useState(false);

    const [observacao, setObservacao] = useState("");
    const [isEditingObs, setIsEditingObs] = useState(false);
    const [idEdit, setIdEdit] = useState();
    const [isEditingCheck, setIsEditingCheck] = useState();

    const { user, socket } = useAuth();

    const handleKeyDownTitle = (e) => {
        if (e.key === "Enter") {
            axios.post(`${process.env.REACT_APP_APIPATH}/tarefa/updateNome/${idtarefa}`, {
                nome: form ? form : tarefaData?.tarefa[0]?.nome,
                idprojeto: idprojeto
            }).then((res) => {
                setForm("");
                setIsEditing(false);
                socket.emit('att-list-tarefaView', idtarefa);
            })
                .catch((error) => {
                    console.error(error);
                })
        }
    }

    const changeStatusCheck = (id, status) => {
        axios.post(`${process.env.REACT_APP_APIPATH}/tarefa/updateCheckStatus/${idtarefa}`, {
            status: status,
            idchecklist: id,
            checklist_size: tarefaData?.tarefa[0]?.checklist_size,
            checklist_done: tarefaData?.tarefa[0]?.checklist_done,
        }).then((res) => {
            socket.emit('att-list-tarefaView', idtarefa);
        })
            .catch((error) => {
                console.error(error);
            })
    }

    const handleUpdateDataTarefa = (e) => {
        axios.post(`${process.env.REACT_APP_APIPATH}/tarefa/updateDate/${idtarefa}`, {
            date: dayjs(e).format("YYYY-MM-DD HH:mm:ss"),
            idprojeto: idprojeto
        }).then((res) => {
            socket.emit('att-list-tarefaView', idtarefa);
        })
            .catch((error) => {
                console.error(error);
            })

    }

    const handleDeleteTarefa = (e) => {
        axios.post(`${process.env.REACT_APP_APIPATH}/tarefa/delete/${idprojeto}`, {
            idtarefa: idtarefa
        }).then((res) => {
            setTrigger(false);
            socket.emit('att-list-tarefa', idprojeto);
        })
            .catch((error) => {
                console.error(error);
            })
    }


    const handleDeleteCheckView = (id) => {
        axios.post(`${process.env.REACT_APP_APIPATH}/tarefa/deleteCheck/${idtarefa}`, {
            idchecklist: id,
            checklist_size: tarefaData?.tarefa[0]?.checklist_size
        }).then((res) => {
            socket.emit('att-list-tarefaView', idtarefa);
        })
            .catch((error) => {
                console.error(error);
            })
    }


    const handleKeyDownCheck = (e, id, nome, type) => {
        if (e.key === 'Enter') {
            if (type === "edit") {
                axios.post(`${process.env.REACT_APP_APIPATH}/tarefa/updateCheckNome/${idtarefa}`, {
                    idchecklist: id,
                    nome: form === "" ? nome : form
                })
                    .then((res) => {
                        setIsEditingCheck(false);
                        setIdEdit("");
                        setForm("");
                        socket.emit('att-list-tarefaView', idtarefa);
                    })
                    .catch((error) => {
                        console.error(error);
                    })
            } else {
                axios.post(`${process.env.REACT_APP_APIPATH}/tarefa/addCheck`, {
                    nome: formCheck,
                    idtarefa: idtarefa,
                    checklist_size: tarefaData?.tarefa[0]?.checklist_size
                }).then((res) => {
                    setFormCheck("");
                    document.getElementById("add_check").value = ""
                    socket.emit('att-list-tarefaView', idtarefa);
                })
                    .catch((error) => {
                        console.error(error);
                    })
            }
        }
    }

    const submiteObs = () => {
        if (observacao === "") {
            setHasError(true);
            setError("Por favor, preencher o campo abaixo!");
        } else {
            axios.post(`${process.env.REACT_APP_APIPATH}/tarefa/addObservacao/${idtarefa}`, {
                observacao: observacao,
            })
                .then((res) => {
                    document.getElementById("input_obs").value = ""
                    setObservacao("");
                    socket.emit('att-list-tarefaView', idtarefa);
                })
                .catch((error) => {
                    console.error(error);
                })
        }
    }

    const updateDeleteObs = (id, type) => {
        if (type === "edit") {
            setIsEditingObs(true);
            setIdEdit(id);
        } else {
            axios.post(`${process.env.REACT_APP_APIPATH}/tarefa/deleteObservacao`, {
                idobservacao: id
            }).then((res) => {
                socket.emit('att-list-tarefaView', idtarefa);
            })
                .catch((error) => {
                    console.error(error);
                })
        }
    }

    const submitUpdateObs = (obs, id) => {
        axios.post(`${process.env.REACT_APP_APIPATH}/tarefa/updateObservacao`, {
            observacao: observacao === "" ? obs : observacao,
            idobservacao: id
        })
            .then((res) => {
                setIsEditingObs(false);
                setIdEdit("");
                setObservacao("");
                socket.emit('att-list-tarefaView', idtarefa);
            })
            .catch((error) => {
                console.error(error);
            })
    }

    return (

        <Container>
            <div className="absolute">
                <Card_Tarefa>
                    {isEditing ? <input className="input" defaultValue={tarefaData?.tarefa[0]?.nome} onKeyDown={handleKeyDownTitle} onChange={(e) => setForm(e.target.value)}></input> : <p onClick={() => setIsEditing(true)} className="titulo">{tarefaData?.tarefa[0]?.nome}</p>}
                    {hasError ? <Error><p>{error}</p></Error> : ""}
                    <Block_ViewTarefa>
                        <div className="date_viewTarefa">
                            <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                                <img src={schedule} />
                                <p onClick={() => {
                                    setDateOpen(true);
                                }}>{dayjs(tarefaData?.tarefa[0]?.data).locale('pt-br').format('DD MMM')}</p>
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
                                            handleUpdateDataTarefa(e);
                                        }}
                                    /> :
                                    ""
                                }
                            </div>
                            <button className="delete" onClick={handleDeleteTarefa}>
                                <img src={del} />
                                Delete
                            </button>
                        </div>
                        <div className="line"></div>
                        <div className="header_checklist">
                            <p>Check-list</p>
                            <img className="icon_check" src={add} onClick={() => { setIsAddCheck(true); }} />
                        </div>
                        <Checklist_View>
                            {tarefaData?.checklist?.map((e) => (
                                <div className="container_check">
                                    <div style={{ display: "flex", gap: "10px", alignItems: "center", width: "100%" }}>
                                        {e.status === "0" ? <img onClick={() => changeStatusCheck(e.idchecklist, true)} src={check} /> : <svg xmlns="http://www.w3.org/2000/svg" onClick={() => changeStatusCheck(e.idchecklist, false)} fill="#147EFB" height="48" viewBox="0 96 960 960" width="48"><path d="m417 754 300-301-63-64-237 237-110-110-63 64 173 174ZM189 961q-39.05 0-66.525-27.475Q95 906.05 95 867V285q0-39.463 27.475-67.231Q149.95 190 189 190h582q39.463 0 67.231 27.769Q866 245.537 866 285v582q0 39.05-27.769 66.525Q810.463 961 771 961H189Zm0-94h582V285H189v582Zm0-582v582-582Z" /></svg>}
                                        {isEditingCheck === true && idEdit === e.idchecklist ?
                                            <input defaultValue={e.nome} onKeyDown={(event) => handleKeyDownCheck(event, e.idchecklist, e.nome, "edit")} onChange={(e) => setForm(e.target.value)}></input>
                                            :
                                            <>
                                                {e.status === "0" ? <p style={{ cursor: "pointer" }} onClick={() => { setIsEditingCheck(true); setIdEdit(e.idchecklist) }}>{e.nome}</p> : <p style={{ textDecoration: "line-through" }}>{e.nome}</p>}
                                            </>
                                        }
                                    </div>
                                    <svg onClick={() => handleDeleteCheckView(e.idchecklist)} className="dele" xmlns="http://www.w3.org/2000/svg" fill="#147EFB" height="48" viewBox="0 96 960 960" width="48"><path d="M261 936q-24.75 0-42.375-17.625T201 876V306h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438V306ZM367 790h60V391h-60v399Zm166 0h60V391h-60v399ZM261 306v570-570Z" /></svg>
                                </div>
                            ))}
                        </Checklist_View>
                        <div style={{ width: "100%", paddingBottom: "5px" }}>
                            {isAddCheck ?
                                <>
                                    <div className="add_check">
                                        <input onKeyDown={(event) => handleKeyDownCheck(event, null, null, "add")} type="text" placeholder="Adicionar Check" id="add_check" onChange={(e) => setFormCheck(e.target.value)} />
                                        <div>
                                            <p onClick={() => setIsAddCheck(false)}>Cancelar</p>
                                        </div>
                                    </div>
                                </>
                                :
                                ""
                            }
                        </div>
                        <Block_Coment>
                            <div className="container_observacao">
                                <img src={account} />
                                <div className="block_obs">
                                    <textarea id="input_obs" placeholder="Adicione uma observação" onChange={(e) => setObservacao(e.target.value)} />
                                    <button onClick={submiteObs}>Salvar</button>
                                </div>
                            </div>
                        </Block_Coment>
                        {tarefaData?.observacao.length > 0 ?
                            <>
                                {tarefaData?.observacao.map((e) => (
                                    <ContainerObservacao>
                                        <img src={account} />
                                        <div className="block_right">
                                            {isEditingObs === true && idEdit === e.idobservacao ?
                                                <div className="editing">
                                                    <textarea defaultValue={e.observacao} onChange={(e) => setObservacao(e.target.value)} />
                                                    <div>
                                                        <button onClick={() => submitUpdateObs(e.observacao, e.idobservacao)}>Salvar</button>
                                                        <span onClick={() => {
                                                            setIsEditingObs(false);
                                                            setIdEdit("");
                                                            setObservacao("");
                                                        }}>Cancelar</span>
                                                    </div>
                                                </div>
                                                :
                                                <>
                                                    <div className="card_obs">{e.observacao}</div>
                                                    <div className="edit_delete_obs">
                                                        <span onClick={() => updateDeleteObs(e.idobservacao, "edit")}>Editar</span>
                                                        <span onClick={() => updateDeleteObs(e.idobservacao, "delete")}>Deletar</span>
                                                    </div>
                                                </>
                                            }
                                        </div>
                                    </ContainerObservacao>
                                ))}
                            </>
                            :
                            ""
                        }

                    </Block_ViewTarefa>
                    <img className="close" src={close} onClick={() => {
                        socket.emit('att-list-tarefa', idprojeto);
                        setIsAddCheck(false);
                        setTrigger(false);
                    }} />
                </Card_Tarefa>
            </div>
        </Container>
    )
}