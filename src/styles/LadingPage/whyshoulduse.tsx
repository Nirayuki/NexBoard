import { styled } from "styled-components";


export const WhyShouldUse = styled.div`
    width: 100%;
    padding: 50px 10px;

    background-color: #f7f7f7;

    display: flex;
    align-items: center;
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

            gap: 20px;

            .text{
                width: 100%;

                line-height: 25px;

                font-size: 1rem;
            }

        }
    }
`