import MenuLateral from "./components/Menulateral"
import TimeLine from "./components/TimeLine"
import News from "./components/News"
import Footer from "./components/Footer"
import SuggestFollow from "./components/SuggestFollow"


import  "./styles/main.sass"
import "./styles/reset.sass"


function App() {

  return (
    <div className="App">
      <MenuLateral/>
      <TimeLine/>
        <aside className="news_follows">
           <News/>
           <SuggestFollow/>
        </aside>
      <Footer/>
    </div>
  )
}

export default App
