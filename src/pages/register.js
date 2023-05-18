import React, {useState} from 'react';
import {Container, Card, Block, Block_Input, Icons, Button, Error} from '../styles/register';
import {Link} from 'react-router-dom';
import axios from 'axios';

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
    branco: ""
}

function Register(){

    const [form, setForm] = useState(initialValues);
    const [errors, setErrors] = useState(initialErros);
    const [hasError, setHasError] = useState(false);

    const handleChange = (ev) => {
        const { name, value } = ev.target

        setForm({ ...form, [name]: value });
    }

    const onSubmit = () =>{
        console.log(form);
        if(form.email === '' || form.nome === '' || form.senha === '' || form.senha !== form.confirmSenha){
            setHasError(true);
            
            if(form.email === "" || form.nome === "" || form.senha === ""){
                setErrors({ ...errors, ["branco"]: "Por favor, preencher todos os campos."});
            }else{
                setErrors({ ...errors, ["branco"]: ""});
            }

            if(form.senha !== form.confirmSenha){
                setErrors({ ...errors, ["confirmSenha"]: "As senhas não estão iguais."});
            }else{
                setErrors({ ...errors, ["confirmSenha"]: ""});
            }
        }else{
            setHasError(false);
            setErrors(initialErros);
            axios.post('http://localhost:8080/user/register', {
                nome: form.nome,
                email: form.email,
                senha: form.senha
            })
            .then((res) => {
                console.log(res);
            })
            .catch(function (error) {
                // manipula erros da requisição
                console.error(error);
            })
        }
    }

    return(
        <Container>
            <Card>
                <img className="persona" src={persona}/>
                {hasError ? 
                <Error>
                   {errors.branco ? <p>{errors.branco}</p> : ""} 
                   {errors.confirmSenha ? <p>{errors.confirmSenha}</p> : ""}
                </Error> :
                ""
                }
                <Block>
                    <Block_Input>
                        <input name="nome" type='text' placeholder='Nome' onChange={handleChange}></input>
                        <Icons>
                            <img className='badge' src={badge}/>
                            <div className='line'/>
                        </Icons>
                        
                    </Block_Input>

                    <Block_Input>
                        <input name="email" type='email' placeholder='Email' onChange={handleChange}></input>
                        <Icons>
                            <img className='mail' src={mail}/>
                            <div className='line'/>
                        </Icons>
                        
                    </Block_Input>

                    <Block_Input>
                        <input name="senha" type='password' placeholder='Password' onChange={handleChange}></input>
                        <Icons>
                            <img className='lock' src={lock}/>
                            <div className='line'/>
                        </Icons>
                    </Block_Input>

                    <Block_Input>
                        <input name="confirmSenha" type='password' placeholder='Confirmar Senha' onChange={handleChange}></input>
                        <Icons>
                            <img className='lock' src={lock}/>
                            <div className='line'/>
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