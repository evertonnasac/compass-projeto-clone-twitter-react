import MenuLateral from "./Menulateral"
import TimeLine from "./TimeLine"
import News from "./News"
import Footer from "../../components/Footer"
import SuggestFollow from "./SuggestFollow"
import ProfilePage from "./ProfilePage"
import Error from "../../components/Error"
import ProfileLateral from "./ProfileLateral"
import NewsSearch from "./NewsSearch"

import {Context } from "../../context/themeContext"
import { useContext, useState } from "react"
import {BrowserRouter, Routes, Route} from  "react-router-dom"

import "../../styles/components/main.sass"

function Main(){

    const {theme} = useContext(Context) 
    const [aba, setAba] = useState("") 

    let element : any

    if(aba == "timeline"){
        element = <TimeLine/>
    }
    else if(aba == "home"){
        element = <ProfilePage/>
    }
    else{
        element = <Error/>
    }

    return(
        
        <div className={theme + " main"}>
            <aside className="left_container">
                <MenuLateral  setAba = {setAba}/>
                <ProfileLateral/>
            </aside>
            <main className={theme + " main_container"}>
                {element}
            </main > 
            <article className= {theme +" right_container"}>
                <NewsSearch/>
                <News/>
                <SuggestFollow/>
            </article>
            <footer className="footer">
                <Footer/>
            </footer> 
        </div>
   
    )
}

export default Main