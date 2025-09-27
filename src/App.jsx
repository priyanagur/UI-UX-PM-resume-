import { useState } from 'react'
import NavBar from './components/NavBar'

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./utils/routes";
import './App.css'
import Footer from './components/Footer';
function App() {


  return (
    <>
   <Router>
       <NavBar/>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
         <Footer/>
  </Router>
    </>
  )
}

export default App
