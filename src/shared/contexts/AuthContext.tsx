import { createContext, useEffect, useState } from "react";
import { IAuthProvider, IContext, IUser } from "../@types/auth";
import { LoginRequest } from "../services/auth";
import { getUserLocalStorage, setUserLocalStorage } from "../utils/auth";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({children}: IAuthProvider) => {
    const [user, setUser] = useState<IUser | null>()

    useEffect(()=> {
        const user = getUserLocalStorage();
        if(user) {
            setUser(user);
        }
    }, []);

    async function signin (email: string, password: string) {
        const response = await LoginRequest(email, password);

        const payload = {token: response.token, email}

        setUser(payload);

        setUserLocalStorage(payload);
    }

    function signout () {
        setUser(null)
        setUserLocalStorage(null);
    }

    return (
        <AuthContext.Provider value={{...user, signin, signout, signed: !!user}}>
            {children}
        </AuthContext.Provider>
    )
}