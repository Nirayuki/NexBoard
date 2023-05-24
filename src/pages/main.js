import React, { useState, useEffect } from "react";
import { DefaultLayout } from "../components/DefaultLayout";
import { Container, Section, Button, Block_andamento } from "../styles/main";
import add from '../Assets/add.svg';
import { CardIndex } from '../components/CardIndex';
import { Pop_up } from "../components/Pop_up";
import axios from "axios";
import { UserAuth } from "../context/authcontext";


function Main() {
    const [trigger, setTrigger] = useState(false);
    const [listProjetos, setListProjetos] = useState();
    const { user, socket } = UserAuth();

    useEffect(() => {
        if (listProjetos === undefined) {
            axios.post(`http://localhost:8080/projeto/list`, {
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

        socket.on('list-main-newData', (data) => {
            console.log(data);
            setListProjetos(data);
        })

    }, [socket])

    return (
        <DefaultLayout>
            {trigger ? <Pop_up trigger={trigger} setTrigger={setTrigger} type="projeto" /> : ""}
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