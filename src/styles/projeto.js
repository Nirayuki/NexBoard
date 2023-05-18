import { styled } from "styled-components";


export const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding: 100px;
    gap: 10px;

    
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

    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    padding: 10px;
    gap: 10px;

    font-size: 24px;
    color: white;

`

export const Icons = styled.div`
    width: 90px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 10px;
    gap: 10px;

    img{
        width: 35px;
        height: 35px;
        cursor: pointer;
    }

    img:hover{
        opacity: 0.8;
    }
`

export const Section_Cards = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 10px;
    gap: 10px;

`

export const Card = styled.div`
    width: 363px;
    
    display: flex;
    flex-direction: column;
    padding: 3px 15px 15px 15px;
    gap: 20px;

    background: #2C2C2C;
    border-radius: 5px;

    font-size: 22px;
    color: white;

    .line{
        width: 333px;
        height: 0px;

        border: 2px solid rgba(255, 255, 255, 0.5);
    }
`

export const Block_Tarefa = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 10px;
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
`
