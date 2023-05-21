import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    position: fixed;

    background-color: rgba(0, 0, 0, 0.3);

    display: flex;
    justify-content: center;

    padding-top: 10px;

    z-index: 999;

    overflow-y: auto;

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
        padding-top: 10px;

        img{
            width: 25px;
            height: 25px;
        }

        p{
            font-size: 15px;
            color: white;
        }

        cursor: pointer;

        .datePicker{
            position: absolute;
            top: 0px;
            left: 130px;
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

export const Card_Tarefa = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px 20px 20px 20px;

    width: 518px;

    background: #2C2C2C;
    border-radius: 5px;

    position: relative;
    gap: 20px;

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

`

export const Block_ViewTarefa = styled.div`
    width: 100%;
   display: flex;
   flex-direction: column;
   padding: 10px 0px;
   gap: 10px;
   
    .date_viewTarefa{
        display: flex;
        align-items: center;
        gap: 5px;
        color: white;

        img{
            width: 20px;
            height: 20px;
        }
    }

    .line{
        width: 100%;
        height: 0px;

        border: 1px solid rgba(255, 255, 255, 0.5);
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

   .add_check{
        width: 100%;
        display: flex;
        flex-direction: column;

        color: white;

        input{
            background: #FFFFFF;
            border-radius: 5px;
            border: none;
            padding: 10px 10px 10px 10px;
            width: calc(100% - 15px);
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

export const Checklist_View = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    padding: 10px 0px;

    .container_check{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        color: white;

        img, svg{
            width: 25px;
            height: 25px;

            cursor: pointer;
        }

        img:hover{
            opacity: 0.8;
        }

        input{
            background: #FFFFFF;
            border-radius: 5px;
            border: none;
            padding: 5px 0px 5px 5px;
            width: calc(100% - 15px);
        }
    }

    .dele{
            width: 24px;
            height: 24px;
            cursor: pointer;
        }

    .dele:hover{
        opacity: 0.8;
    }
`


export const Block_Coment = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    .container_observacao{
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        gap: 10px;
    }

    img{
        width: 35px;
        height: 35px;
    }

    .block_obs{
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: calc(100% - 15px);
        padding-bottom: 10px;

        textarea{
            width: calc(100% - 16px);
            padding-left: 10px;
            padding-top: 5px;
            resize: none;
            border-radius: 5px;
        }

        button{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            border: none;

            width: 82px;
            height: 30px;

            background: #147EFB;
            border-radius: 5px;

            color: white;
            cursor: pointer;
        }
    }
`

export const ContainerObservacao = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 10px;

    color: white;

    img{
        width: 35px;
        height: 35px;
    }

    .card_obs{
        padding: 5px 10px;
        background-color: white;
        width: calc(100% - 20px);
        border-radius: 5px;
        color: black;

    }

    .block_right{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 5px 0px 0px;
        gap: 10px;

        .editing{
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 10px;

            div{
                display: flex;
                gap: 10px;
                align-items: center;
            }

            span:hover{
                opacity: 0.8;
            }

            span{
                cursor: pointer;
            }
        }

        textarea{
            width: calc(100% - 16px);
            padding-left: 10px;
            padding-top: 5px;
            resize: none;
            border-radius: 5px;
        }

        button{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            border: none;

            width: 82px;
            height: 25px;

            background: #147EFB;
            border-radius: 5px;

            color: white;
            cursor: pointer;
        }
    }

    .edit_delete_obs{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px;
        gap: 10px;

        span{
            font-size: 15px;
            cursor: pointer;
        }

        span:hover{
            opacity: 0.8;
        }
    }


`

export const Block_Settings = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;

    div{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;

        color: white;
    }

    input{
        background: #FFFFFF;
        border-radius: 5px;
        border: none;
        height: 41px;
        padding-left: 10px;
    }
`