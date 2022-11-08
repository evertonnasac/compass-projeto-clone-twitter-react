import Main from "./pages/principal/Main"
import { ThemeContext,  } from "./context/themeContext"
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
