import React from "react";
import { DefaultLayout } from "../components/DefaultLayout";
import { Container, Section_Buttons, Section_Titulo, Icons, Section_Cards, Card, Block_Tarefa, Block_Add } from "../styles/projeto";
import done from '../Assets/done.svg';
import undo from '../Assets/undo.svg';
import del from '../Assets/delete.svg';
import github from '../Assets/Octicons-mark-github.svg';
import link from '../Assets/link.svg';
import add from '../Assets/add.svg';


function Projeto() {
    return (
        <DefaultLayout>
            <Container>
                <Section_Buttons>
                    <div className="container_button_status">
                        <button className="concluido">
                            <img src={done} />
                            Concluído
                        </button>
                        <button className="andamento">
                            <img src={undo} />
                            Em andamento
                        </button>
                    </div>
                    <button className="delete">
                        <img src={del} />
                        Delete
                    </button>
                </Section_Buttons>
                <Section_Titulo>
                    <p>Titulo do projeto</p>
                    <Icons>
                        <img src={github} onClick={() => console.log("Clicou imagem")} />
                        <img src={link} onClick={() => console.log("Clicou imagem")} />
                    </Icons>
                </Section_Titulo>
                <Section_Cards>
                    <Card>
                        <p className="titulo">Tarefas</p>
                        <div className="line"></div>
                        <Block_Tarefa>

                        </Block_Tarefa>
                        <Block_Add>
                            <img src={add}/>
                            <p>Adicionar Tarefa</p>
                        </Block_Add>
                    </Card>
                    <Card>
                        <p className="titulo">Em andamento</p>
                        <div className="line"></div>
                        <Block_Tarefa>

                        </Block_Tarefa>
                        <Block_Add>
                            <img src={add}/>
                            <p>Adicionar Tarefa</p>
                        </Block_Add>
                    </Card>
                    <Card>
                         <p className="titulo">Concluído</p>
                         <div className="line"></div>
                         <Block_Tarefa>

                        </Block_Tarefa>
                        <Block_Add>
                            <img src={add}/>
                            <p>Adicionar Tarefa</p>
                        </Block_Add>
                    </Card>
                </Section_Cards>
            </Container>
        </DefaultLayout>
    );
}

export default Projeto;