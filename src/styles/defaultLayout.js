import { styled } from "styled-components";



export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 50px 0px 50px;
    gap: 30px;
    height: 55px;

    background: #2C2C2C;

    @media screen and (max-width: 530px){
        padding: 0px 0px 0px 30px;
        width: calc(100% - 30px);
    }

    .navigation{
        display: flex;
        align-items: flex-start;
        gap: 30px;

    }

    .navigation a{
        text-decoration: none;
        cursor: pointer;
        color: white;
        font-size: 20px;
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

export const HamburgerIcon = styled.img`
  width: 40px;
  height: 40px;
  display: ${({ isOpen }) => (isOpen ? "none" : "flex")};
  cursor: pointer;

    &&:hover{
        opacity: 0.8;
    }
`;


export const Sidebar = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: flex-start;

  gap: 20px;
  padding-top: 20px;
  padding-left: 20px;
  position: fixed;

  top: 0;
  left: 0;
  width: 50%;
  height: 100%;

  background: #2C2C2C;

  z-index: 999;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;


  a{
    padding: 10px;
    font-size: 18px;
    color: white;
    text-decoration: none;

    display: flex;
    align-items: flex-end;

    gap: 10px;
  }

  a:hover{
    opacity: 0.8;
  }

  img{
    width: 25px;
    height: 25px;
    color: white;
  }

`;
