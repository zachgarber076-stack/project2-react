import { useState } from "react";
import AuthContext from "./AuthContext";
import { useNavigate } from "react-router";

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    const login = (username) => {
        setUser({username});
        navigate("/");
    }

    const logout = () => {
        setUser(null);
        navigate('/login');
    }

    return ( 
        <AuthContext.Provider 
            value={{user, login, logout}}>
                {children}
        </AuthContext.Provider>
    );
};
