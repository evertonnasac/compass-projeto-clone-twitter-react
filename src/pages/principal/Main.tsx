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
import { useContext } from "react"
import {Routes, Route} from  "react-router-dom"

import "../styles/components/main.sass"

function Main(){

    const {theme} = useContext(Context)

    return(
        <div className={theme + " main"}>
            <aside className="left_container">
                <MenuLateral/>
                <ProfileLateral/>
            </aside>
            <main className={theme + " main_container"}>
                <Routes>
                    <Route path="/" element = {<TimeLine/>} />
                    <Route path="/profile" element = {<ProfilePage/>} /> 
                    <Route path="/error" element = {<Error/>} /> 
                </Routes>
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