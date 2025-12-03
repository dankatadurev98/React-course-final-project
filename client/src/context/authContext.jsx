import { createContext } from "react";
import { useLocalStorage } from "../hooks/UseLocalStorage";

export const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [user,setUser] = useLocalStorage('user',null);


    function login(email, token, _id) {
        setUser({ email, token, _id });
    }

    function logout() {
        setUser(null);
    }

    const value = {
        user,
        isAuthenticated: !!user,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}