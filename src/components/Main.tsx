import MenuLateral from "../components/Menulateral"
import TimeLine from "../components/TimeLine"
import News from "../components/News"
import Footer from "../components/Footer"
import SuggestFollow from "../components/SuggestFollow"
import ProfilePage from "../components/ProfilePage"
import {Context } from "../utils/themeContext"
import { useContext } from "react"
import {Routes, Route} from  "react-router-dom"

function Main(){

    const {theme} = useContext(Context)

    return(
        <div className="App">
            <div className={theme + " App"}>
                <MenuLateral/>
                <Routes>
                    <Route path="/" element = {<TimeLine/>} />
                    <Route path="/profile" element = {<ProfilePage/>} /> 
                </Routes>
                <aside className="news_follows">
                    <News/>
                    <SuggestFollow/>
                </aside>
                <Footer/>
            </div>
        </div>
    )
}

export default Main