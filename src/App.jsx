import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './Pages/Home'
import Calculate from './Pages/CalculateGP'
// import NavBar from './Components/NavBar'

const App = () => {
  return (
     
  
    <>
      {/* <NavBar/> */}
          <Routes>
            <Route path = "/" element={<Home/>} />
            <Route path = "/calculateGP" element = {<Calculate/>} />
            {/* <Route path = "/" element = {<About/>} /> */}
  
           </Routes>
    </>
  )}
  

export default App