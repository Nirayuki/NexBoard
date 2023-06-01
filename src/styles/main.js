import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 100px 100px 0px 100px;
    gap: 10px;

    @media screen and (max-width: 570px) {
        padding: 100px 0px 0px 15px;
    }
`

export const Section = styled.section`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 0px;
    gap: 30px;


    .titulo_concluido{
        font-size: 28px;
        color: white;
    }

`

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 10px;
    gap: 10px;
    height: 38px;

    background: #147EFB;
    border-radius: 5px;

    border: none;

    color: white;

    font-size: 18px;

    cursor: pointer;

    &&:hover{
        opacity: 0.8;
    }

    svg{
        width: 28px;
        height: 28px;
        fill: white;
    }
`

export const Block_andamento = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 10px;
    flex-wrap: wrap;
`