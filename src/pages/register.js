import React, { useState } from 'react';
import { Container, Card, Block, Block_Input, Icons, Button, Error } from '../styles/register';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import persona from '../Assets/person.svg';
import mail from '../Assets/mail.svg';
import lock from '../Assets/lock.svg';
import badge from '../Assets/badge.svg';

const initialValues = {
    nome: "",
    email: "",
    senha: "",
    confirmSenha: ""
}

function Register() {

    const [form, setForm] = useState(initialValues);
    const [errors, setErrors] = useState();
    const [hasError, setHasError] = useState(false);

    const navigate = useNavigate();

    const handleChange = (ev) => {
        const { name, value } = ev.target

        setForm({ ...form, [name]: value });
    }

    const onSubmit = (e) => {
        if (form.senha !== form.confirmSenha) {
            setHasError(true);
            setErrors("A senhas devem ser idênticas");
        } else {
            axios.post(`${process.env.REACT_APP_APIPATH}/user/register`, {
                nome: form.nome,
                email: form.email,
                senha: form.senha
            })
                .then((res) => {
                    localStorage.setItem("user", res.data[0].iduser);
                    window.location.reload();
                })
                .catch((error) => {
                    setHasError(true);
                    setErrors(error.response.data.erro);
                    console.error(error);
                })
        }
    }

    return (
        <Container>
            <Card>
                <img className="persona" src={persona} />
                {hasError ?
                    <Error>
                        <p>{errors}</p>
                    </Error> :
                    ""
                }
                <Block>
                    <Block_Input>
                        <input name="nome" type='text' placeholder='Nome' onChange={handleChange}></input>
                        <Icons>
                            <img className='badge' src={badge} />
                            <div className='line' />
                        </Icons>

                    </Block_Input>

                    <Block_Input>
                        <input name="email" type='email' placeholder='Email' onChange={handleChange}></input>
                        <Icons>
                            <img className='mail' src={mail} />
                            <div className='line' />
                        </Icons>

                    </Block_Input>

                    <Block_Input>
                        <input name="senha" type='password' placeholder='Password' onChange={handleChange}></input>
                        <Icons>
                            <img className='lock' src={lock} />
                            <div className='line' />
                        </Icons>
                    </Block_Input>

                    <Block_Input>
                        <input name="confirmSenha" type='password' placeholder='Confirmar Senha' onChange={handleChange}></input>
                        <Icons>
                            <img className='lock' src={lock} />
                            <div className='line' />
                        </Icons>

                    </Block_Input>
                    <Button onClick={onSubmit}>
                        Registrar-se
                    </Button>
                </Block>
            </Card>
        </Container>
    );
}


export default Register;