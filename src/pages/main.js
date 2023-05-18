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
    const [listProjetos, setListProjetos] = useState({});
    const { user } = UserAuth();

    useEffect(() => {
        axios.post('http://localhost:8080/projeto/list', {
            iduser: user.iduser
        })
        .then((res) => {
            setListProjetos(res);
        })
        
    }, [listProjetos])
    return (
        <DefaultLayout>
            <Pop_up trigger={trigger} setTrigger={setTrigger}/>
            <Container>
                <Section>
                    <Button onClick={() => setTrigger(true)}>
                        <img src={add}/>
                        Adicionar Projeto
                    </Button>
                    <Block_andamento>
                        {listProjetos.data?.map((e) => (
                            <CardIndex titulo={e.nome}/>
                        ))}
                    </Block_andamento>
                </Section>
                <Section>
                    Concluido
                </Section>
            </Container>
        </DefaultLayout>
    );
}


export default Main;