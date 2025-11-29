import { createContext,useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null)

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