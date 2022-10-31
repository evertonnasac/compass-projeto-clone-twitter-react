import MenuLateral from "./components/Menulateral"
import TimeLine from "./components/TimeLine"
import News from "./components/News"
import Footer from "./components/Footer"
import SuggestFollow from "./components/SuggestFollow"
import ProfilePage from "./components/ProfilePage"

import {BrowserRouter, Routes, Route} from  "react-router-dom"

import  "./styles/main.sass"
import "./styles/reset.sass"


function App() {

  return (

    <BrowserRouter>
      <div className="App">
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
    </BrowserRouter>
    
  )
}

export default App
