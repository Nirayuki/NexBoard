import { styled } from 'styled-components'

export const Header = styled.header`
    width: 100%;
    height: 80px;

    /* background-color: white;
    box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3); */

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;

    position: absolute;
    top: 0;
    z-index: 999;

    .container{
        max-width: 1000px;
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: space-between;

        gap: 40px;
        
        img{
            height: 30px;
        }

    
        .nav{
            display: flex;
            gap: 50px;

            a{
                color: white;
                font-size: 1.2rem;
            }

            a:hover{
                opacity: 0.7;
            }
        }

        button{
            border: none;
            background-color: white;
            color: black;
            border-radius: 6px;

            padding: 8px;
            width: 80px;

            cursor: pointer;
        }

        button:hover{
            opacity: 0.8;
        }
    }
`