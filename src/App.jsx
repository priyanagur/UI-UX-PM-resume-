import { useState } from 'react'
import AnalyticDashBoard from './pages/AnalyticsDashBoard'
import Home from './pages/Home'
import './App.css'
import Login from './pages/Login'
import UserDashboard from './pages/UserDashBoard'
import InternshipPage from './assets/InternshipPage'
import InternshipAllocationDashboard from './pages/Oraganisation'
import NavBar from './components/NavBar'
import { Route,Routes } from 'react-router-dom'
import InternshipMatchmaking from './pages/InternshipMatchmaking'
import Allocation from './pages/Allocation'

function App() {


  return (
    <>
     <NavBar/>
   <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path ='/user-match' element={<InternshipMatchmaking/>}/>
         <Route path='organization-dashboard' element={<InternshipAllocationDashboard/>}/>
         <Route path='analysis' element={<AnalyticDashBoard/>}/>
         <Route path='/intenship' element={<InternshipPage/>}/>
         <Route path='/login' element={<Login/> }/>
         <Route path='/allocation' element={<Allocation/> }/>
   </Routes>
    </>
  )
}

export default App
