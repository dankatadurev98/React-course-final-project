import { Routes, Route } from "react-router"

import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import About from "./components/about/About"
import Catalog from './components/catalog/Catalog'
import Register from "./components/register/Register"
import Login from "./components/login/Login"
import Home from "./components/home/Home"
import AddGame from "./components/addGame/AddGame"
import Details from "./components/details/Details"
import Edit from "./components/edit/Edit"


function App() {

  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/addGame' element={<AddGame/>}/>
        <Route path='/catalog/:_id/details' element={<Details/>}/>
        <Route path="/catalog/:_id/details/edit" element={<Edit/>}/>
      </Routes>
      <Footer />

    </div>
  )
}

export default App
