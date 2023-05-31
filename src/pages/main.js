import React, { useState, useEffect } from "react";
import { DefaultLayout } from "../components/DefaultLayout";
import { Container, Section, Button, Block_andamento } from "../styles/main";
import add from '../Assets/add.svg';
import { CardIndex } from '../components/CardIndex';
import { Pop_up_AddProjeto } from "../components/Pop_up_AddProjeto";
import axios from "axios";
import { useAuth } from "../context/authcontext";


function Main() {
    const [trigger, setTrigger] = useState(false);
    const [listProjetos, setListProjetos] = useState();
    const { user, socket } = useAuth();

    useEffect(() => {
        document.title = "NexBoard"
        if (listProjetos === undefined) {
            axios.post(`${process.env.REACT_APP_APIPATH}/projeto/list`, {
                iduser: user?.iduser
            })
                .then((res) => {
                    setListProjetos(res.data);
                })
                .catch(function (error) {
                    // manipula erros da requisição
                    console.error(error);
                })
        }

        socket?.on('list-main-newData', (data) => {
            console.log(data);
            setListProjetos(data);
        })

    }, [socket])

    return (
        <DefaultLayout>
            {trigger ? <Pop_up_AddProjeto trigger={trigger} setTrigger={setTrigger}  /> : ""}
            <Container>
                <Section>
                    <Button onClick={() => setTrigger(true)}>
                        <img src={add} />
                        Adicionar Projeto
                    </Button>
                    <Block_andamento>
                        {listProjetos?.map((e) => (
                            <>
                                {e.status === "Em andamento" ? <CardIndex data={e} titulo={e.nome} /> : ""}
                            </>
                        ))}
                    </Block_andamento>
                </Section>
                <Section>
                    <p className="titulo_concluido">Concluido</p>
                    <Block_andamento>
                        {listProjetos?.map((e) => (
                            <>
                                {e.status === "Concluido" ? <CardIndex data={e} titulo={e.nome} /> : ""}
                            </>
                        ))}
                    </Block_andamento>
                </Section>
            </Container>
        </DefaultLayout>
    );
}


export default Main;