import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./components/About"
import Cards from "./components/Cards"
import Register from "./components/Register"
import Login from "./components/Login"
import Home from "./components/Home"
import { Routes,Route } from "react-router"

function App() {

  return (
    <div>
      <Header />

<Routes>
<Route path="/" element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/register' element={<Register/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/cards' element={<Cards/>}/>
</Routes>

     

      <Footer />

    </div>
  )
}

export default App
