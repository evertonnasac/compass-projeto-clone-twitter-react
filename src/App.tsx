import MenuLateral from "./components/Menulateral"
import TimeLine from "./components/TimeLine"
import News from "./components/News"
import Footer from "./components/Footer"


import  "./styles/main.sass"


function App() {

  return (
    <div className="App">
      <MenuLateral/>
      <TimeLine/>
      <News/>
      <Footer/>
    </div>
  )
}

export default App
