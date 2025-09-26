import { useState } from 'react'
import NavBar from './components/NavBar'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./utils/routes";
import './App.css'
function App() {


  return (
    <>
   <BrowserRouter>
       <NavBar/>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
