import { useContext, createContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({});
  

    useEffect(() => {
        const userData = localStorage.getItem("user");
        
        if(userData){
            axios.post("http://localhost:8080/user/getuser" ,{
                iduser: userData
            })
            .then((res) => {
                setUser(res.data); 
            })
        }else{
            setUser("");
        }

    }, [])

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
}


export const UserAuth = () => {
    return useContext(AuthContext);
}