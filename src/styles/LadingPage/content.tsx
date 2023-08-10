import { styled } from 'styled-components'
import bg from '../../assets/wave-haikei.png'

export const Content = styled.div`
    width: 100%;

    .home{
        width: 100%;
        height: 100vh;
        background-color: #5624C5;
        position: relative;
        z-index: 100;
        display: flex;
        padding-top: 200px;
        align-items: center;
        flex-direction: column;
        gap: 30px;

        button{
            border: none;
            background-color: white;
            color: black;
            border-radius: 6px;
            width: 150px;
            height: 50px;

            padding: 8px;
            font-size: 1.2rem;

            cursor: pointer;
        }

        button:hover{
            opacity: 0.8;
        }

        .button{
            z-index: 999;
        }

        .title{
            font-size: 4rem;
            color: white;
            z-index: 999;
        }

        .subtitle{
            font-size: 1.5rem;
            color: white;
            z-index: 999;
        }

        .wave{
            position: absolute;
            bottom: -30px;
            z-index: 1;
            img{
                width: 100%;
            }
        }
    }   
`