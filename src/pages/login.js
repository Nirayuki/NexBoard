import React, {useState} from 'react';
import {Container, Card, Block, Block_Input, Icons, Button} from '../styles/login';
import persona from '../Assets/person.svg';
import mail from '../Assets/mail.svg';
import lock from '../Assets/lock.svg';

const initialValues = {
    email: "",
    senha: ""
}

function Login(){

    const [form, setForm] = useState(initialValues);

    const handleChange = (ev) => {
        const { name, value } = ev.target

        setForm({ ...form, [name]: value });
    }

    const onSubmit = () =>{
        console.log(form);
    }

    return(
        <Container>
            <Card>
                <img className="persona" src={persona}/>
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
                    <Button onClick={onSubmit}>
                        Entrar
                    </Button>
                </Block>
            </Card>
        </Container>
    );
}


export default Login;