import { styled } from "styled-components";


export const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding: 20px 50px 10px 50px;
    gap: 25px;

    .line{
        width: 100%;
        height: 1px;
        background-color: #808080;
    }

    
`

export const Section_Buttons = styled.section`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 0px 30px;
    gap: 10px;


    .container_button_status{
        display: flex;
        align-items: center;
        padding: 10px;
        gap: 10px;
    }

    img{
        width: 30px;
        height: 30px;
    }

    button{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px 10px;
        gap: 10px;

        border-radius: 5px;

        border: none;

        color: white;
        cursor: pointer;
    }

    button:hover{
        opacity: 0.8;
    }

    .concluido{
        background-color: #2ECD15;
    }

    .andamento{
        background-color: #147EFB;
    }

    .delete{
        background-color: #FF0000;
    }

`

export const Section_Titulo = styled.section`
    width: 100%;
    display: flex;

    flex-direction: column;
    align-items: flex-end;


    .container_titulo{
        width: 100%;
        display: flex;
        
        justify-content: space-between;
        align-items: center;
        gap: 10px;

        font-size: 24px;
        color: white;
        height: 50px;
    }

    

`

export const Icons = styled.div`
    width: 190px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    img, svg{
        width: 28px;
        height: 28px;
        cursor: pointer;
    }

    img:hover{
        opacity: 0.8;
    }

    svg:hover{
        opacity: 0.5;
    }

    button{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px 10px;
        gap: 10px;

        border-radius: 5px;

        border: none;

        color: white;
        cursor: pointer;
        background-color: #147EFB;

        font-size: 15px;
    }

    button:hover{
        opacity: 0.8;
    }
`

export const Section_Cards = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 10px 10px 10px 0px;
    gap: 10px;
    overflow-x: auto;

    &::-webkit-scrollbar{
        border: none;
        width: 10px;
        height: 0.5rem;
        border-radius: 5px;

    }

    &::-webkit-scrollbar-thumb{
        background-color: #5b5b5b;
        border-radius: 5px;
    }

`

export const Card = styled.div`    
    display: flex;
    flex-direction: column;
    padding: 3px 15px 15px 15px;
    gap: 20px;

    background: #2C2C2C;
    border-radius: 5px;

    font-size: 22px;
    color: white;

    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;

    .line{
        width: 100%;
        height: 0px;

        border: 1px solid rgba(255, 255, 255, 0.5);
    }
`

export const Block_Tarefa = styled.div`
    width: 353px;
    display: flex;
    flex-direction: column;
    padding-right: 15px;
    gap: 10px;
    max-height: 320px;
    overflow-y: auto;
    overflow-x: hidden;

    &::-webkit-scrollbar{
        border: none;
        width: 10px;
        height: 0.5rem;
        border-radius: 5px;

    }

    &::-webkit-scrollbar-thumb{
        background-color: #5b5b5b;
        border-radius: 5px;
    }

`

export const Block_Add = styled.div`
    display: flex;
    width: 100%;
    gap: 10px;
    align-items: center;

    cursor: pointer;
    img{
        width: 30px;
        height: 30px;
    }

    &&:hover{
        opacity: 0.8;
    }

    p{
        font-size: 20px;
    }
`

export const Card_Tarefa = styled.div`
    width: 333px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 0px 10px 10px 10px;

    background: #147EFB;
    border-radius: 5px;

    cursor: pointer;

    .icons{
        display: flex;
        gap: 10px;
        align-items: center;
    }

    div{
        display: flex;
        align-items: center;
        gap: 5px;
    }

    span{
        font-size: 15px;
    }

    img{
        width: 23px;
        height: 23px;
    }

    &&:hover{
        opacity: 0.8;
    }
`
