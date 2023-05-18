import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 100px;
    gap: 10px;
`

export const Section = styled.section`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 0px;
    gap: 30px;

`

export const Button = styled.button`
    display: flex;
    align-items: center;

    padding: 10px;
    gap: 10px;
    width: 220px;
    height: 48px;

    background: #147EFB;
    border-radius: 5px;

    border: none;

    color: white;

    font-size: 20px;

    cursor: pointer;

    &&:hover{
        opacity: 0.8;
    }

    img{
        width: 28px;
        height: 28px;
    }
`

export const Block_andamento = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 10px;
    flex-wrap: wrap;
`