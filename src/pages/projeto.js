import React, { useState, useEffect } from "react";
import { DefaultLayout } from "../components/DefaultLayout";
import { Container, Section_Buttons, Section_Titulo, Icons, Section_Cards, Card, Block_Tarefa, Block_Add, Card_Tarefa } from "../styles/projeto";

import done from '../Assets/done.svg';
import undo from '../Assets/undo.svg';
import del from '../Assets/delete.svg';
import github from '../Assets/Octicons-mark-github.svg';
import link from '../Assets/link.svg';
import add from '../Assets/add.svg';
import schedule from '../Assets/schedule.svg';
import check from '../Assets/check_box_outline.svg';
import checkdone from '../Assets/check_box.svg';

import axios from "axios";
import { Pop_up_ViewTarefa } from "../components/Pop_up_ViewTarefa";
import { Pop_up_EditProjeto } from "../components/Pop_up_EditProjeto";
import { Pop_up_AddTarefa } from "../components/Pop_up_AddTarefa";

import 'dayjs/locale/pt-br';
import dayjs from "dayjs";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authcontext";


function Projeto() {

    const { user, socket } = useAuth();

    const [trigger, setTrigger] = useState(false);
    const [dataProjeto, setDataProjeto] = useState();
    const [tarefa, setTarefa] = useState();
    const [andamento, setAndamento] = useState();
    const [concluido, setConcluido] = useState();
    const [type, setType] = useState();
    const [type_tarefa, setType_Tarefa] = useState();
    const [idTarefa, setIdTarefa] = useState();
    const [tarefaData, setTarefaData] = useState();

    const urlParams = new URLSearchParams(window.location.search);
    const idprojeto = urlParams.get("id");
    const navigate = useNavigate();

    useEffect(() => {
        socket?.on('list-tarefa-newData', (data) => {
            setTarefa(data.tarefa);
            setAndamento(data.andamento);
            setConcluido(data.concluido);
        });

        socket?.on('list-projeto-newData', (data) => {
            setDataProjeto(data);
        });

        socket?.on('list-tarefaView-newData', (data) => {
            setTarefaData(data);
        });

        if (dataProjeto === undefined) {
            axios.post(`${process.env.REACT_APP_APIPATH}/projeto/getone`, {
                idprojeto: idprojeto
            })
                .then((res) => {
                    setDataProjeto(res.data);
                    document.title = `NexBoard - ${res.data.nome}`
                })
                .catch(function (error) {
                    // manipula erros da requisição
                    console.error(error);
                })
        }

        if (tarefa === undefined) {
            axios.post(`${process.env.REACT_APP_APIPATH}/projeto/listTarefa/${idprojeto}`)
                .then((res) => {
                    setTarefa(res.data.tarefa);
                    setAndamento(res.data.andamento);
                    setConcluido(res.data.concluido);
                })
                .catch(function (error) {
                    // manipula erros da requisição
                    console.error(error);
                })
        }

    }, [socket])

    const getTarefa = (id) => {
        axios.post(`${process.env.REACT_APP_APIPATH}/tarefa/getTarefa/${id}`)
            .then((res) => {
                console.log(res.data);
                setTarefaData(res.data);
                setTrigger(true);
            })
            .catch(function (error) {
                // manipula erros da requisição
                console.error(error);
            })
    }

    const setStatus = (status) => {
        try {
            axios.post(`${process.env.REACT_APP_APIPATH}/projeto/projetoChangeStatus/${user?.iduser}`, {
                status: status,
                idprojeto: idprojeto
            })
                .then((res) => {
                    socket.emit('att-list-projeto', idprojeto);
                })
                .catch(function (error) {
                    // manipula erros da requisição
                    console.error(error);
                })
        } catch (err) {
            console.log(err);
        }
    }


    const handleOnDrag = (event, data) => {
        event.dataTransfer.setData("cardData", data.idtarefa);
    }

    const handleOnDragOver = (e) => {
        e.preventDefault();
    }

    const handleOnDrop = (e, type_card) => {
        const dataTransfering = e.dataTransfer.getData("cardData");
        try {
            axios.post(`${process.env.REACT_APP_APIPATH}/tarefa/tarefaChangeStatus`, {
                status: type_card,
                idtarefa: dataTransfering
            })
                .then((res) => {
                    socket.emit('att-list-tarefa', idprojeto);
                })
                .catch(function (error) {
                    // manipula erros da requisição
                    console.error(error);
                })
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <DefaultLayout>
            {trigger && type === "view_tarefa" ? <Pop_up_ViewTarefa setTrigger={setTrigger} idprojeto={idprojeto} idtarefa={idTarefa} tarefaData={tarefaData} /> : ""}
            {trigger && type === "edit_projeto" ? <Pop_up_EditProjeto setTrigger={setTrigger} idprojeto={idprojeto} dataProjeto={dataProjeto} /> : ""}
            {trigger && type === "add_tarefa" ? <Pop_up_AddTarefa type_tarefa={type_tarefa} setTrigger={setTrigger} idprojeto={idprojeto} dataProjeto={dataProjeto} /> : ""}
            <Container>
                <Section_Titulo>
                    <div className="container_titulo">
                        <p>{dataProjeto?.nome}</p>
                        <Icons>
                        {dataProjeto?.status === "Em andamento" ? <button onClick={() => setStatus("Concluido")} style={{backgroundColor: "#2ECD15"}}>
                            <img src={done} />
                        </button>
                            :
                            <button onClick={() => setStatus("Em andamento")} style={{backgroundColor: "#147EFB"}}>
                                <img src={undo} />
                            </button>}
                            {dataProjeto?.github ? <a href={dataProjeto?.github} target="_blank"><img src={github} /></a> : <img src={github} />}
                            {dataProjeto?.site ? <a href={dataProjeto?.site} target="_blank"><img src={link} onClick={() => console.log("Clicou imagem")} /></a> : <img src={link} onClick={() => console.log("Clicou imagem")} />}
                            <svg onClick={() => {
                                setTrigger(true);
                                setType("edit_projeto");
                            }} xmlns="http://www.w3.org/2000/svg" fill="white" style={{ opacity: "0.8" }} height="48" viewBox="0 96 960 960" width="48"><path d="M382.739 981.978 362.5 854.065q-17.565-6.282-37.489-17.684-19.924-11.403-34.728-23.446l-119.674 54.956-98.5-173.804 109.434-79.957q-1.761-8.282-2.261-19.065-.5-10.782-.5-19.065 0-8.283.5-19.065.5-10.783 2.261-19.065L72.109 457.674l98.5-173.326 120.152 54.717q14.565-11.804 34.369-23.087 19.805-11.282 37.37-16.804l20.239-129.392h194.522L597.5 298.174q17.565 6.522 37.87 17.304 20.304 10.783 34.347 23.587l119.913-54.717 98.261 173.326-109.673 78.196q1.76 9.282 2.38 20.065.62 10.782.62 20.065 0 9.283-.62 19.565-.62 10.283-2.38 19.565l109.673 78.957-98.5 173.804-119.913-54.956q-14.804 12.043-34.108 23.826-19.305 11.783-37.87 17.304l-20.239 127.913H382.739ZM479.522 706q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Z" /></svg>
                        </Icons>
                    </div>
                    <div className="line" />
                </Section_Titulo>

                <Section_Cards>
                    <Card
                        onDrop={(e) => handleOnDrop(e, "Tarefa")}
                        onDragOver={(e) => handleOnDragOver(e)}
                    >
                        <p className="titulo">Tarefas</p>
                        <div className="line"></div>
                        <Block_Tarefa>
                            {tarefa?.map((e) => (
                                <Card_Tarefa onClick={() => {
                                    setType("view_tarefa");
                                    setIdTarefa(e.idtarefa);
                                    getTarefa(e.idtarefa);
                                }}
                                    draggable
                                    onDragStart={(event) => handleOnDrag(event, e)}
                                >
                                    <p>{e.nome}</p>
                                    <div className="icons">
                                        <div>
                                            <img src={schedule} />
                                            <span>{dayjs(e.data).locale('pt-br').format('DD MMM')}</span>
                                        </div>
                                        <div>
                                            {e.checklist_done === e.checklist_size ? <img src={checkdone} /> : <img src={check} />}
                                            <span>{`${e.checklist_done}/${e.checklist_size}`}</span>
                                        </div>
                                    </div>
                                </Card_Tarefa>
                            ))}
                        </Block_Tarefa>
                        <Block_Add onClick={() => {
                            setTrigger(true);
                            setType("add_tarefa");
                            setType_Tarefa("Tarefa");
                        }}>
                            <img src={add} />
                            <p>Adicionar Tarefa</p>
                        </Block_Add>
                    </Card>
                    <Card
                        onDrop={(e) => handleOnDrop(e, "Em andamento")}
                        onDragOver={(e) => handleOnDragOver(e)}
                    >
                        <p className="titulo">Em andamento</p>
                        <div className="line"></div>
                        <Block_Tarefa

                        >
                            {andamento?.map((e) => (
                                <Card_Tarefa onClick={() => {
                                    setType("view_tarefa");
                                    setIdTarefa(e.idtarefa);
                                    getTarefa(e.idtarefa);
                                }}
                                    draggable
                                    onDragStart={(event) => handleOnDrag(event, e)}
                                >
                                    <p>{e.nome}</p>
                                    <div className="icons">
                                        <div>
                                            <img src={schedule} />
                                            <span>{dayjs(e.data).locale('pt-br').format('DD MMM')}</span>
                                        </div>
                                        <div>
                                            {e.checklist_done === e.checklist_size ? <img src={checkdone} /> : <img src={check} />}
                                            <span>{`${e.checklist_done}/${e.checklist_size}`}</span>
                                        </div>
                                    </div>
                                </Card_Tarefa>
                            ))}
                        </Block_Tarefa>
                        <Block_Add onClick={() => {
                            setTrigger(true);
                            setType("add_tarefa");
                            setType_Tarefa("Em andamento");
                        }}>
                            <img src={add} />
                            <p>Adicionar Tarefa</p>
                        </Block_Add>
                    </Card>
                    <Card
                        onDrop={(e) => handleOnDrop(e, "Concluido")}
                        onDragOver={(e) => handleOnDragOver(e)}
                    >
                        <p className="titulo">Concluído</p>
                        <div className="line"></div>
                        <Block_Tarefa>
                            {concluido?.map((e) => (
                                <Card_Tarefa onClick={() => {
                                    setType("view_tarefa");
                                    setIdTarefa(e.idtarefa);
                                    getTarefa(e.idtarefa);
                                }}
                                    draggable
                                    onDragStart={(event) => handleOnDrag(event, e)}
                                >
                                    <p>{e.nome}</p>
                                    <div className="icons">
                                        <div>
                                            <img src={schedule} />
                                            <span>{dayjs(e.data).locale('pt-br').format('DD MMM')}</span>
                                        </div>
                                        <div>
                                            {e.checklist_done === e.checklist_size ? <img src={checkdone} /> : <img src={check} />}
                                            <span>{`${e.checklist_done}/${e.checklist_size}`}</span>
                                        </div>
                                    </div>
                                </Card_Tarefa>
                            ))}
                        </Block_Tarefa>
                        <Block_Add onClick={() => {
                            setTrigger(true);
                            setType("add_tarefa");
                            setType_Tarefa("Concluido");
                        }}>
                            <img src={add} />
                            <p>Adicionar Tarefa</p>
                        </Block_Add>
                    </Card>
                </Section_Cards>
            </Container>
        </DefaultLayout>
    );
}

export default Projeto;