import Main from "./components/Main"
import MenuLateral from "./components/Menulateral"
import TimeLine from "./components/TimeLine"
import News from "./components/News"
import Footer from "./components/Footer"
import SuggestFollow from "./components/SuggestFollow"
import ProfilePage from "./components/ProfilePage"
import { ThemeContext, Context } from "./context/themeContext"
import { useContext } from "react"
import {BrowserRouter, Routes, Route} from  "react-router-dom"

import  "./styles/app.sass"
import "./styles/reset.sass"


function App() {

  return (
    <BrowserRouter>
      <ThemeContext>
        <Main/>
      </ThemeContext>
    </BrowserRouter>
  )
}

export default App
