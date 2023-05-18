import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    .persona{
        width: 107px;
        height: 107px;
    }

`

export const Card = styled.div`
    max-width: 725px;
    width: 100%;

    display: flex;
    align-items: center;
    flex-direction: column;

    padding: 20px;

    background: #2C2C2C;
    border-radius: 5px;


`

export const Block = styled.div`
    max-width: 585px;
    width: 100%;

    padding: 20px 0px;

    display: flex;
    align-items: center;
    flex-direction: column;

    gap: 30px;

`


export const Block_Input = styled.div`
    width: 100%;

    display: flex;
    align-items: center;

    position: relative;

    input{
        width: 100%;
        height: 48px;

        background-color: white;
        border-radius: 5px;

        padding: 0px 70px;

        border: none;
    }
`

export const Icons = styled.div`
    display: flex;
    gap: 5px;

    width: 54px;
    height: 24px;
    left: 17px;
    top: 12px;

    align-items: center;

    position: absolute;

    outline: none;

    .line{
        width: 23px;
        height: 0px;

        border: 1px solid rgba(0, 0, 0, 0.5);
        transform: rotate(90deg);
    }

    .mail, .lock{
        width: 29px;
        height: 24px;
    }
`

export const Button = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 10px;

    width: 100%;
    height: 48px;

    background: #147EFB;
    border-radius: 5px;

    color: white;
    cursor: pointer;

    border: none;

    &&:hover{
        opacity: 0.7;
    }
`
