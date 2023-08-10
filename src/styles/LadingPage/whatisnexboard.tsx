import { styled } from "styled-components";


export const WhatIsNexboard = styled.div`
    z-index: 999;
    width: 100%;
    padding: 50px 10px;
    padding-top: 0px;

    display: flex;
    justify-content: center;

    .container{
        max-width: 1200px;
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 100px;

        .title{
            
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .title-p{
            color: black;
            font-size: 2.5rem;
            line-height: 10px;
        }

        .line{
            height: 3px;
            background-color: #5624C5;
            width: 100px;
            border-radius: 6px;
        }
    
        .content{
            width: 100%;
        }

        .row{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            gap: 50px;

            .text{
                width: 70%;

                line-height: 25px;

                font-size: 1.1rem;
            }

        }
    }  
`