import { useState } from "react";
import{ createContext, ReactNode } from "react";

type UserContextProps = {
    children: ReactNode
}

const InitialContext = {
    theme: "",
    setTheme: () => {}
}

type TypeContext = {
    theme: string,
    setTheme: (newState: string) => void
}


const Context  = createContext<TypeContext>(InitialContext)

function ThemeContext({children}:UserContextProps){

    const [theme, setTheme]= useState("light")

    return(
        <Context.Provider value={{theme, setTheme}}>
            {children}
        </Context.Provider>
    )
}

export {Context, ThemeContext}