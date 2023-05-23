import { styled } from "styled-components";



export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 100px;
    gap: 30px;


    height: 55px;

    background: #2C2C2C;

    .navigation{
        display: flex;
        align-items: flex-start;

        gap: 30px;

    }

    .navigation a{
        text-decoration: none;
        cursor: pointer;
        color: white;
    }

    .navigation a:hover{
        opacity: 0.8;
    }

    .config{
        width: 90px;
        display: flex;
        justify-content: space-between;
    }

    .config img{
        width: 30px;
        height: 30px;

        cursor: pointer;
    }

    .config img:hover{
        opacity: 0.8;
    }


`