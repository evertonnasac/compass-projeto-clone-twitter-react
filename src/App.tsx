import MenuLateral from "./components/Menulateral"
import TimeLine from "./components/TimeLine"
import News from "./components/News"


import  "./styles/main.sass"


function App() {

  return (
    <div className="App">
      <MenuLateral/>
      <TimeLine/>
      <News/>
    </div>
  )
}

export default App
