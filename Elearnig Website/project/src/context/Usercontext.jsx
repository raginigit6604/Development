import react from 'react'
// here we use contextAPI from Global State Management
 import { createContext,useContext } from 'react' // usecontext is to use context, createcontext is use to create context

 export const ThemeContext = createContext ({
      darkTheme : true, //initial value
      setDarkTheme: () =>{}, // it is afunction to change initial value
 })

 export const useTheme = ()=>{ //here usetheme is a hook
    return useContext(ThemeContext);
 }

 export const ThemeProvider = ThemeContext.Provider
