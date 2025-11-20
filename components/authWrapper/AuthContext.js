import {createContext, useContext} from 'react'

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const useUsername = () => {
    const { user } = useAuth();
    return user ? user.username : null;
}

export default AuthContext;