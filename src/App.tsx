import Main from "./components/Main"
import MenuLateral from "./components/Menulateral"
import TimeLine from "./components/TimeLine"
import News from "./components/News"
import Footer from "./components/Footer"
import SuggestFollow from "./components/SuggestFollow"
import ProfilePage from "./components/ProfilePage"
import { ThemeContext, Context } from "./utils/themeContext"
import { useContext } from "react"
import {BrowserRouter, Routes, Route} from  "react-router-dom"

import  "./styles/main.sass"
import "./styles/reset.sass"


function App() {

  const {theme} = useContext(Context)

  return (
    <BrowserRouter>
      <ThemeContext>
        <Main/>
      </ThemeContext>
    </BrowserRouter>
  )
}

export default App
