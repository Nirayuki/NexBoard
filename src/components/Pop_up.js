import React, { useState, useRef, useEffect } from "react";
import {
    Container, Card, Button, Error, Card_Add, Block_Form, Block_ViewTarefa, Card_Tarefa,
    Checklist_View, Block_Coment, ContainerObservacao, Block_Settings
} from "../styles/Pop_up";

import close from '../Assets/close.svg';
import schedule from '../Assets/schedule.svg';
import add from '../Assets/add.svg';
import del from '../Assets/delete.svg';
import check from '../Assets/check_box_outline.svg';
import checkdone from '../Assets/check_box.svg';
import account from '../Assets/account_circle.svg'

import axios from "axios";
import { UserAuth } from "../context/authcontext";
import ScrollableFeed from "react-scrollable-feed";
import { StaticDatePicker, LocalizationProvider } from "@mui/x-date-pickers-pro";

import 'dayjs/locale/pt-br';
import dayjs from "dayjs";



export const Pop_up = (props) => {
    const { idprojeto, trigger, setTrigger, type_tarefa, idtarefa, dataProjeto, tarefaData, setTarefaData } = props;

    const initialValues = {
        nome: dataProjeto?.nome,
        github: dataProjeto?.github,
        site: dataProjeto?.site
    }

    const [form, setForm] = useState("");
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState();

    const [formCheck, setFormCheck] = useState([]);
    const [inputCheck, setInputCheck] = useState();
    const [isAddCheck, setIsAddCheck] = useState(false);

    const [formDate, setFormDate] = useState();
    const [dateOpen, setDateOpen] = useState(false);

    const [observacao, setObservacao] = useState("");
    const [isEditingObs, setIsEditingObs] = useState(false);
    const [idEdit, setIdEdit] = useState();
    const [isEditingCheck, setIsEditingCheck] = useState();
    const [isEditing, setIsEditing] = useState(false);

    const [formSettings, setFormSettings] = useState(initialValues);

    const { user, socket } = UserAuth();


    const onSubmit = () => {
        if (form === "") {
            setHasError(true);
            setError("Por favor, preencher o campo abaixo!");
        } else {
            setHasError(false);
            try {
                axios.post(`${process.env.REACT_APP_APIPATH}/projeto/add`, {
                    nome: form,
                    iduser: user.iduser
                })
                    .then((res) => {
                        setTrigger(false);
                        socket.emit('list-main', user.iduser);
                    })
                    .catch(function (error) {
                        // manipula erros da requisição
                        console.error(error);
                    })
            } catch (err) {
                console.log(err);
            }
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
        if (formCheck === "" || form === "" || formDate === "") {
            setHasError(true);
            setError("Por favor, preencher o campo abaixo!");
        } else {
            setHasError(false);
            try {
                axios.post(`${process.env.REACT_APP_APIPATH}/projeto/tarefa`, {
                    idprojeto: idprojeto,
                    nome: form,
                    date: formDate ? dayjs(formDate).format("YYYY-MM-DD HH:mm:ss") : dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss"),
                    checklist: formCheck,
                    status: type_tarefa,
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
            } catch (err) {
                console.log(err);
            }
        }
    }

    const handleDeleteCheck = (id) => {
        setFormCheck(formCheck.filter(formCheck => formCheck.id !== id))
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setFormCheck([...formCheck, { id: crypto.randomUUID(), nome: inputCheck }]);
            document.getElementById("add_check").value = ""
        }
    }

    const changeStatusCheck = (id, status) => {
        axios.post(`${process.env.REACT_APP_APIPATH}/tarefa/updateCheckStatus/${idtarefa}`, {
            status: status,
            idchecklist: id,
            checklist_size: tarefaData?.tarefa[0]?.checklist_size,
            checklist_done: tarefaData?.tarefa[0]?.checklist_done,
        }).then((res) =>{
            socket.emit('att-list-tarefaView', idtarefa);
        })
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
        }
    }

    const submitUpdateObs = (obs, id) => {
        try {
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
        } catch (err) {
            console.log(err);
        }
    }

    const handleKeyDownCheck = (e, id, nome, type) => {
        if (e.key === 'Enter') {
            if (type === "edit") {
                try {
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
                } catch (err) {
                    console.log(err);
                }
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
            }
        }
    }

    const handleDeleteCheckView = (id) => {
        try {
            axios.post(`${process.env.REACT_APP_APIPATH}/tarefa/deleteCheck/${idtarefa}`, {
                idchecklist: id,
                checklist_size: tarefaData?.tarefa[0]?.checklist_size
            }).then((res) =>{
                socket.emit('att-list-tarefaView', idtarefa);
            })
        } catch (err) {
            console.log(err);
        }
    }

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
        } catch (err) {
            console.log(err);
        }
    }

    const handleDeleteTarefa = (e) => {
        try{
            axios.post(`${process.env.REACT_APP_APIPATH}/tarefa/delete/${idprojeto}`, {
                idtarefa: idtarefa
            }).then((res) => {
                setTrigger(false);
                socket.emit('att-list-tarefa', idprojeto);
            })
        }catch(err){
            console.log(err);
        }
    }

    const handleUpdateDataTarefa = (e) => {
        console.log(e);
        try{
            axios.post(`${process.env.REACT_APP_APIPATH}/tarefa/updateDate/${idtarefa}`, {
                date: dayjs(e).format("YYYY-MM-DD HH:mm:ss"),
                idprojeto: idprojeto
            }).then((res) =>{
                socket.emit('att-list-tarefaView', idtarefa);
            })

        }catch(err){
            console.log(err);
        }
    }

    const handleKeyDownTitle = (e) => {
        if(e.key === "Enter"){
            try{
                axios.post(`${process.env.REACT_APP_APIPATH}/tarefa/updateNome/${idtarefa}`, {
                    nome: form ? form : tarefaData?.tarefa[0]?.nome,
                    idprojeto: idprojeto
                }).then((res) => {
                    setForm("");
                    setIsEditing(false);
                    socket.emit('att-list-tarefaView', idtarefa);
                })
            }catch(err){
                console.log(err);
            }
        }
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
                                        <div className="date" >
                                            <img src={schedule} />
                                            <p onClick={() => {
                                                setDateOpen(true);
                                            }}>{formDate ? dayjs(formDate).format('DD MMM') : "Adicionar Data"}</p>
                                            {dateOpen && props.type === "add_tarefa" ?
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
                                                        console.log(dayjs(new Date(e)).format("YYYY-MM-DD"));
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
                            :
                            ""
                        }
                        {props.type === "view_tarefa" ?
                            <Card_Tarefa>
                                {isEditing ? <input className="input" defaultValue={tarefaData?.tarefa[0]?.nome} onKeyDown={handleKeyDownTitle} onChange={(e) => setForm(e.target.value)}></input> : <p onClick={() => setIsEditing(true)} className="titulo">{tarefaData?.tarefa[0]?.nome}</p>}
                                {hasError ? <Error><p>{error}</p></Error> : ""}
                                <Block_ViewTarefa>
                                    <div className="date_viewTarefa">
                                        <div style={{display: "flex", gap: "6px", alignItems: "center"}}>
                                            <img src={schedule} />
                                            <p onClick={() => {
                                                setDateOpen(true);
                                            }}>{dayjs(tarefaData?.tarefa[0]?.data).format('DD MMM')}</p>
                                            {dateOpen && props.type === "view_tarefa" ?
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
                            :
                            ""
                        }
                        {props.type === "edit_projeto" ? <Card>
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
                            :
                            ""
                        }
                    </div>
                </Container>
                : ""}
        </>
    )
}