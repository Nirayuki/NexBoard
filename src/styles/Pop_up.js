import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    left: 0;
    position: fixed;

    background-color: rgba(0, 0, 0, 0.3);

    display: flex;
    justify-content: center;

    padding-top: 50px;

    z-index: 999;
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;

    padding: 0px 20px 20px 20px;
    gap: 20px;

    width: 715px;
    background: #2C2C2C;
    border-radius: 5px;

    position: relative;

    z-index: 999;

    img{
        width: 38px;
        height: 38px;

        position: absolute;

        left: 700px;
        top: 15px;

        cursor: pointer;
    }

    img:hover{
        opacity: 0.8;
    }

    .titulo{
        font-size: 24px;
        color: white;
    }

    input{
        background: #FFFFFF;
        border-radius: 5px;
        border: none;
        height: 41px;
        padding-left: 10px;
    }

    input:focus{
        outline: none;
    }
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 10px;

    width: 124px;
    height: 39px;

    background: #147EFB;
    border-radius: 5px;

    border: none;

    cursor: pointer;

    font-size: 20px;
    color: white;

    &&:hover{
        opacity: 0.8;
    }
`

export const Error = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;


    background-color: red;

    border-radius: 5px;

    p{
        color: white;
        padding-left: 10px;
    }
`