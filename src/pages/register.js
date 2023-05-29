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

const initialErros = {
    confirmSenha: "",
    branco: "",
    emailexist: "",
    invalidEmail: ""
}

function Register() {

    const [form, setForm] = useState(initialValues);
    const [errors, setErrors] = useState(initialErros);
    const [hasError, setHasError] = useState(false);
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const handleChange = (ev) => {
        const { name, value } = ev.target

        setForm({ ...form, [name]: value });
    }

    const onSubmit = (e) => {
        if (form.email === '' || form.nome === '' || form.senha === '' || form.senha !== form.confirmSenha || !form.email.match(validRegex)) {
            setHasError(true);
            console.log(errors);

            if (form.email === "" || form.nome === "" || form.senha === "") {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    branco: "Por favor, preencher todos os campos.",
                  }));
            } else {
                setErrors((prevErrors) => ({ ...prevErrors, branco: "" }));
            }

            if (form.senha !== form.confirmSenha) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    confirmSenha: "Senha incorreta!",
                  }));
            } else {
                setErrors((prevErrors) => ({ ...prevErrors, confirmSenha: "" }));
            }

            if(!form.email.match(validRegex)){
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    invalidEmail: "Email inválido.",
                  }));
            }else{
                setErrors((prevErrors) => ({ ...prevErrors, invalidEmail: "" }));
            }
        } else {
            setHasError(false);
            setErrors(initialErros);
            try {
                axios.post(`${process.env.REACT_APP_APIPATH}/user/register`, {
                    nome: form.nome,
                    email: form.email,
                    senha: form.senha
                })
                .then((res) => {
                    if(res.data.message === "Email já existe"){
                        setHasError(true);
                        setErrors((prevErrors) => ({
                            ...prevErrors,
                            emailexist: "Email já existe.",
                          }));
                    }else{
                        setHasError(false);
                        setErrors((prevErrors) => ({
                            ...prevErrors,
                            emailexist: "",
                          }));
                        localStorage.setItem("user", res.data[0].iduser);
                        window.location.reload();
                    }
                })
            }catch(err){
                console.log(err);
            }
        }
    }

    return (
        <Container>
            <Card>
                <img className="persona" src={persona} />
                {hasError ?
                    <Error>
                        {errors.branco && <p>{errors.branco}</p>}
                        {errors.confirmSenha && <p>{errors.confirmSenha}</p>}
                        {errors.emailexist && <p>{errors.emailexist}</p>}
                        {errors.invalidEmail && <p>{errors.invalidEmail}</p>}
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