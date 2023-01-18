import React from 'react';
import Image from '../Assets/images/two.svg';
import {Container,Button} from 'react-bootstrap';
import Imagee from '../Assets/images/three.png'


const Body = () => {
  return (
    <div className='body'>
    <Container>
    <div className="container">
      <div className="row ">

        <div className="col-12 col-md-12 col-lg-6 pb-5">
          <img src={Image} className='hero2 w-100 h-100' alt="imageone" srcset="" />
        </div>

        <div className="col-12 col-md-12 body-container  sec col-lg-6">
          <h1 className='purpose-text'>Our Purpose</h1> 
          <p className='mt-2 info pt-3'>
            We At M-Learn Discovered That Students Faced A Hard Time Accessing Their Results Hence Failed To Keep Track Of Their
            Semester Grade Point Average (SGPA) and 
            Cumulative Grade Point Average (CGPA).
            <br />
            Hence The Need To Create A Free Web Application Where Students Could Calculate Their CGPA and SGPA Arose.
            <br />
          </p>
          <div className=''>
          <button className='btn btn-primary buttons2 mb-3  btn-2'>
          Calculate GPA
          </button>
          <button className='btn btn-primary mb-3  btn-2'>
          Calculate SGPA
          </button>
          </div>

{/*********************************************************************************************** */}

{/* 
          <div className="row mt-5 mb-5">
            
            <div className="col-12 col-md-12 col-lg-6 col-sm-6">
            <h5 className=''>Share Results With Friends</h5> 
            <button className='btn btn-primary mb-2  '>
              Share
            </button>
          <img src={Imagee} className='hero2 w-100 h-100' alt="imageone" srcset="" />

            </div>

            <div className="col-12 col-md-12 col-lg-6 col-sm-6 second">
            <h5 className=''>Request For Result Correction </h5> 
            <button className='btn btn-primary mb-2  '>
              Open Ticket
          </button>            
          <img src={Imagee} className='hero2 w-100 h-100' alt="imageone" srcset="" />
          </div>
            
          </div> */}
            {/*********************************************************************************************** */}

        </div>
      
     </div>
    </div>


    {/*********************************************************************************************** */}

  </Container>
    </div>
  )
}

export default Body