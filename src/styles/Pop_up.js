import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    left: 0;
    position: fixed;

    background-color: rgba(0, 0, 0, 0.3);

    display: flex;
    justify-content: center;

    padding-top: 10px;

    z-index: 999;

   
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;

    padding: 0px 20px 20px 20px;
    gap: 20px;

    width: 715px;
    background: #2C2C2C;
    border-radius: 5px;

    position: relative;

    z-index: 999;

    img{
        width: 38px;
        height: 38px;

        position: absolute;

        left: 700px;
        top: 15px;

        cursor: pointer;
    }

    img:hover{
        opacity: 0.8;
    }

    .titulo{
        font-size: 24px;
        color: white;
    }

    input{
        background: #FFFFFF;
        border-radius: 5px;
        border: none;
        height: 41px;
        padding-left: 10px;
    }

    input:focus{
        outline: none;
    }
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 10px;

    width: 124px;
    height: 39px;

    background: #147EFB;
    border-radius: 5px;

    border: none;

    cursor: pointer;

    font-size: 20px;
    color: white;

    &&:hover{
        opacity: 0.8;
    }
`

export const Error = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;


    background-color: red;

    border-radius: 5px;

    p{
        color: white;
        padding-left: 10px;
    }
`

export const Card_Add = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px 20px 20px 20px;

    width: 518px;

    background: #2C2C2C;
    border-radius: 5px;

    position: relative;

    .close{
        width: 38px;
        height: 38px;

        position: absolute;

        left: 500px;
        top: 15px;

        cursor: pointer;
    }

    .close:hover{
        opacity: 0.8;
    }

    .titulo{
        font-size: 24px;
        color: white;
    }

    .add_check{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;

        color: white;

        input{
            background: #FFFFFF;
            border-radius: 5px;
            border: none;
            height: 41px;
            padding-left: 10px;
        }

        div{
            display: flex;
            align-items: center;
            gap: 15px;
        }

        button{
            display: flex;
            justify-content: center;
            align-items: center;

            width: 150px;
            height: 36px;

            background: #147EFB;
            border-radius: 5px;
            border: none;

            color: white;

            cursor: pointer;
        }

        button:hover{
            opacity: 0.8;
        }

        p{
            cursor: pointer;
        }

        p:hover{
            opacity: 0.8;
        }
   }

    
`

export const Block_Form = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   padding: 10px 0px;
   gap: 10px;
   
   height: 100%;
   max-height: 400px;
   
   overflow-y: auto;
   scroll-behavior: smooth;


   .scroll{
    padding: 0px 5px 0px 0px;

    &::-webkit-scrollbar{
        border: none;
        width: 10px;
        height: 0.1rem;
        border-radius: 5px;

    }

    &::-webkit-scrollbar-thumb{
        background-color: #5b5b5b;
        border-radius: 5px;
    }

    &::-webkit-scrollbar-track{
        height: 2px;
    }

   }

    .nome_tarefa{

        input{
            background: #FFFFFF;
            border-radius: 5px;
            border: none;
            height: 41px;
            padding-left: 10px;
            width: calc(100% - 15px);
        }

        input:focus{
            outline: none;
        }
    }

   .label{
        font-size: 20px;
        color: white;
   }

   

   .date{   
        display: flex;
        align-items: center;
        gap: 10px;

        width: 100%;

        img{
            width: 30px;
            height: 30px;
        }

        p{
            font-size: 20px;
            color: white;
        }
   }

   .header_checklist{
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 100%;

        img{
            width: 30px;
            height: 30px;

            cursor: pointer;
        }

        img:hover{
            opacity: 0.8;
        }

        p{
            font-size: 20px;
            color: white;
        }

   }

   

   .block_checklist{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;

        padding-bottom: 10px;


   }

   .check_list{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: white;
        

        svg{
            width: 24px;
            height: 24px;
        }

        div{
            display: flex;
            gap: 10px;
            align-items: center;
        }

        .dele{
            width: 24px;
            height: 24px;
            cursor: pointer;
        }

        .dele:hover{
            background-color: rgba(255, 255, 255, 0.2);
            border-radius: 5px;
            padding: 2px;
        }
   }

`