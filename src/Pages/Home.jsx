import React from 'react'
import {Container,Button} from 'react-bootstrap';
import NavBar from '../Components/NavBar';
import Image from '../Assets/images/undraw_certificate_re_yadi.svg'
import Body from '../Components/Body';
import Footer from'../Components/Footer'


const Home = () => {
  return (
    <>
  <div className='home bg-image'>
  <Container>
  <NavBar/>
    <div className="container ">
      <div className="row ">
        <div className="col-12 col-md-12 col-lg-6 body-container homeText">
          <h1>Success On Your</h1> <h1>Academic Journey !</h1>
          <p className='mt-2 info pt-3'>
            Now You Can Keep Track Of Your Semester Grade Point Average (SGPA) and 
            Cumulative Grade Point Average (CGPA) 
            <br />
             Without Stacking Result Sheets. 
             <br />
            <p className='pt-4 '>
            Ensure To Subscribe To Our Newsletter To Get Weekly Updates.
  
            </p>          
          </p>
          <button className='btn btn-primary mb-3 '>
            Discover More
          </button>
        
        </div>
        <div className="col-12 col-md-12 col-lg-6 pt-5 pb-5">
          <img src={Image} className='hero2 w-100 h-100' alt="imageone" srcset="" />
        </div>
     </div>
    </div>


    {/*********************************************************************************************** */}

  </Container>
  </div>
  <Body/>
  <Footer/>

  </>
  )
}

export default Home