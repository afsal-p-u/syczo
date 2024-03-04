import React from 'react'
import { createContext, useContext, useState } from "react";

interface AuthContextType {
    token: string | null,
    setToken: (value: any) => void;
}

const AuthContext = createContext<AuthContextType>({
    token: null,
    setToken: () => {}
})

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [token, _setToken] = useState(localStorage.getItem('auth'))

    const setToken = (value: any) => {
        _setToken(value)
        localStorage.setItem('auth', JSON.stringify(value))
    }
    return(
        <AuthContext.Provider
            value={{ token, setToken }}
        >{children}</AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)