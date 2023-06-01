import { useContext, createContext, useEffect, useState } from "react";
import axios from "axios";
import io from 'socket.io-client';

const AuthContext = createContext();
const socketConnection = io.connect(process.env.REACT_APP_APIPATH);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [socket, setSocket] = useState();
  const userData = localStorage.getItem("user");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (userData) {
          const res = await axios.post(`${process.env.REACT_APP_APIPATH}/user/getuser`, {
            iduser: userData
          });
          setUser(res.data);
          setSocket(socketConnection);
        } else {
          setUser("");
        }
      } catch (error) {
        console.error("Failed to get user data:", error);
        setUser(null);
      }
    };

    if(userData){
      fetchUser();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, socket }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};