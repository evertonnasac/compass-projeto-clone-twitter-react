import Main from "./pages/principal/Main"
import Register from "./pages/auth/register/Register"
import { ThemeContext,  } from "./context/themeContext"
import {BrowserRouter, Routes, Route} from  "react-router-dom"

import  "./styles/app.sass"
import "./styles/reset.sass"


function App() {

  return (
    <BrowserRouter>
      <ThemeContext>
        <Routes>
          <Route  path="/" element = {<Main/>}/>
          <Route  path="/register" element = {<Register/>}/>
        </Routes>
      </ThemeContext>
    </BrowserRouter>
  )
}

export default App
