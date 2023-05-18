import React, {useState} from 'react';
import {Container, Card, Block, Block_Input, Icons, Button, Block_Button, Error} from '../styles/login';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

import persona from '../Assets/person.svg';
import mail from '../Assets/mail.svg';
import lock from '../Assets/lock.svg';

const initialValues = {
    email: "",
    senha: ""
}

function Login(){

    const [form, setForm] = useState(initialValues);
    const [errors, setErrors] = useState("");
    const [hasError, setHasError] = useState(false);
    const navigate = useNavigate();

    const handleChange = (ev) => {
        const { name, value } = ev.target

        setForm({ ...form, [name]: value });
    }

    const onSubmit = () =>{
        if(form.email === "" || form.senha === ""){
            setHasError(true);
            setErrors("Por favor, preencher todos os campos.");
        }else{
            setHasError(false);
            setErrors("");
            axios.post("http://localhost:8080/user/login",{
                email: form.email,
                senha: form.senha
            })
            .then((res) => {
                localStorage.setItem("user", JSON.stringify(res.data));
                navigate("/index");

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
                   <p>{errors}</p>
                </Error> :
                ""
                }
                <Block>
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
                    <Block_Button>
                        <Button onClick={onSubmit}>
                            Entrar
                        </Button>
                        <Link className='link' to="/register">Registrar-se</Link>
                    </Block_Button>
                </Block>
            </Card>
        </Container>
    );
}


export default Login;