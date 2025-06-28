import React from 'react'
import MyNavBar from './components/header/MyNavBar'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomeView from './components/pages/home/HomeView'
import AboutView from './components/pages/about/AboutView'
import MenuView from './components/pages/menu/MenuView'
import ContactView from './components/pages/contact/ContactView'
import PIzzaDetails from './components/pages/menu/PIzzaDetails'



const App = () => {
  return (
    <>
     <MyNavBar/>
    {  /* Define routes */}
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/about" element={<AboutView />} />
        <Route path="/menu" element={<MenuView />} />
        <Route path="/contact" element={<ContactView />} />
        <Route path="/menu/:title" element={<PIzzaDetails/>} />
      </Routes>
    
    </>
  )
}

export default App