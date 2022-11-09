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
    const [aba, setAba] = useState("timeline") 

    let Element : any

    if(aba == "timeline"){
        Element = <TimeLine/>
    }
    else if(aba == "profile"){
        Element = <ProfilePage/>
    }
    else{
        Element = <Error/>
    }

    return(
        
        <div className={theme + " main"}>
            <aside className="left_container">
                <MenuLateral  setAba = {setAba}/>
                <ProfileLateral/>
            </aside>
            <main className={theme + " main_container"}>
                {Element}
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