import { useContext, createContext, useEffect, useState } from "react";
import axios from "axios";

import io from 'socket.io-client';

const AuthContext = createContext();
const socketConnection = io.connect(process.env.REACT_APP_APIPATH);

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState("");
    const [socket, setSocket] = useState();
  

    useEffect(() => {
        const userData = localStorage.getItem("user");

            if(userData){
                axios.post(`${process.env.REACT_APP_APIPATH}/user/getuser` ,{
                        iduser: userData
                    })
                    .then((res) => {
                        setUser(res.data); 
                        setSocket(socketConnection);
                    }).catch((error) => {
                        console.error("Failed to get user data:", error);
                        setUser(null);
                      });
             }else{
                 setUser("");
             }
        
    }, [])

    return (
        <AuthContext.Provider value={{ user, socket }}>
            {children}
        </AuthContext.Provider>
    )
}


export const UserAuth = () => {
    return useContext(AuthContext);
}