import { styled } from 'styled-components'

export const Header = styled.header`
    width: 100%;
    height: 50px;

    background-color: rgba(255, 255, 255, 0.1);

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;

    .container{
        max-width: 1200px;
        width: 100%;

        display: flex;
        justify-content: space-between;
        
        img{
            width: 150px;
        }

        a{
            color: white;
        }

        a:hover{
            opacity: 0.7;
        }
        
        .nav{
            display: flex;
            gap: 30px;
        }
    }
`