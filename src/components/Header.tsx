import { useContext, useState } from "react"
import { Context } from "../context/themeContext"
import "../styles/components/header.sass"

interface HeaderProps {
    screen: string
}

function Header (title: HeaderProps){

   const {theme, setTheme} = useContext(Context)

   function handleTheme(){
        theme == "light"?
        setTheme("dark") : setTheme("light")
   }

    return(
        <header className={theme +" header"}>
            <p className="home_header">{title.screen}</p>
            <img src="../public/icons/menu/btn_theme.png" 
                alt="Trocar tema" 
                className="btn_theme"
                onClick={handleTheme}
                />
        </header>
    )
}
export default Header