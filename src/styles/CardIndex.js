import { styled } from "styled-components";


export const Card = styled.div`
    width: 380px;
    height: 135px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px 10px 15px 10px;
    gap: 30px;

    background: #2C2C2C;
    border-radius: 5px;


    position: relative;

    @media screen and (max-width: 450px){
        width: 300px;
    }

    .titulo{
        font-size: 24px;
        color: white;
    }

    .div_link{
        width: 100%;
        height: 95px;
        left: 0;
        position: absolute;
        cursor: pointer;
        
    }

    &&:hover{
        opacity: 0.8;
    }
`

export const Block = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 20px;

    span{
        font-size: 24px;
        color: #147EFB;
    }
`

export const Icons = styled.div`
    display: flex;
    gap: 20px;

    img{
        width: 35px;
        height: 35px;
        cursor: pointer;
    }
`