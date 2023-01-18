import React from 'react'
import {Container, Button} from "react-bootstrap"
import DetailsForCalculation from '../Components/DetailsForCalculation'
import UserDetails from '../Components/UserDetails'
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer'
import RealSgpa from '../Components/RealSgpa'


const CalculateGP = () => {
  return (
    <>
    <div className='calc-gp bg-imagee'>

    <NavBar/>
  
        <UserDetails/>
        <DetailsForCalculation />
        <RealSgpa/>
        <Footer/>
    

    </div>
    </>
    )
}

export default CalculateGP