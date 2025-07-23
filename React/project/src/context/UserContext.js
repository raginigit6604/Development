import { createContext,useContext } from "react";

export const UserContext = createContext({
    user: null,
    isAuthenticated : false,
    login: (userdata) => {},
    logout: () =>{}
})

export const useUser = ()=>{
    return useContext(UserContext);
}

export const UserProvider = UserContext.Provider;