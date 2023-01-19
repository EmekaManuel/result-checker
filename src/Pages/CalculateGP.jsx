import React from 'react'
// import {Container, Button} from "react-bootstrap"
import DetailsForCalculation from '../Components/DetailsForCalculation'
import UserDetails from '../Components/UserDetails'
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer'
import Sgpa from '../Components/Sgpa'


const CalculateGP = () => {
  return (
    <>
    <div className='calc-gp bg-imagee'>

    <NavBar/>
  
        <UserDetails/>
        <DetailsForCalculation />
        <Sgpa/>
        <Footer/>
    

    </div>
    </>
    )
}

export default CalculateGP