import React from 'react'
import {Container, Button} from "react-bootstrap"


const DetailsForCalculation = () => {
  return (

    <Container>

    <div className="form-group">
        <div className = "input-group col-sm-6 col-md-4  input-group-sm mb-4  mx-auto flex-nonwrap mt-2" >
            <label className='input-group-text' htmlFor='inputGroupSelect'>Courses Offered</label>
            <select className="form-select form-select-sm" id="inputGroupSelect">
                <option value="1" selected >One</option>
                <option value="2"  >Two</option>
                <option value="3"  >Three</option>
                <option value="4"  >Four</option>
                <option value="5"  >Five</option>
                <option value="6"  >Six</option>
                <option value="7"  >Seven</option>
                <option value="8"  >Eight</option>
                <option value="9"  >Nine</option>
                <option value="10"  >Ten</option>
                <option value="11"  >Eleven</option>
                <option value="12"  >Twelve</option>
                <option value="13"  >Thirteen</option>
                <option value="14"  >Fourteen</option>
                <option value="15"  >Fifteen</option>
            </select>
        </div>
    </div>

      
    <div className="form-group">
    <div className='input-group col-lg-4 col-sm-6 input-group-sm mb-3 mx-auto flex-nonwrap mt-2' >
          <span className="input-group-text" id="basic-addon1">Total Units</span>
          <input type="text" className="form-control" placeholder='Units' required aria-label='Units' aria-describedby='basic-addon1'></input>
    </div>
    </div>

      

        <div className='container form-group row'>
            
            <div className=" mx-auto mt-2 col-md-4 col-sm-12 col justify-content-between ">
                
                <div className="col">
                    <div className=' input-group-sm mb-3 mx-auto flex-wrap mt-2'>
                        <span className="" >A - </span>
                        <Button className='pointsbtn' >4.0 Points</Button>
                    </div>
                </div>


                <div className="col">
                <div className=' input-group-sm mb-3 mx-auto flex-wrap mt-2'>
                        <span className="" >B - </span>
                        <Button variant='warning' className='pointsbtn' >3.0 Points</Button>
                    </div>
                </div>


                <div className="col">
                <div className=' input-group-sm mb-3 mx-auto flex-wrap mt-2'>
                        <span className="" >C - </span>
                        <Button className='pointsbtn' >2.0 Points</Button>
                    </div>
                </div>
           
            </div>



            <div className=" mx-auto mt-2 col-md-4 col-sm-12 col  justify-content-between ">
                
            <div className="col">
                <div className=' input-group-sm mb-3 mx-auto flex-wrap mt-2'>
                        <span className="" >D - </span>
                        <Button className='pointsbtn' >1.5 Points</Button>
                    </div>
                </div>

                <div className="col">
                <div className=' input-group-sm mb-3 mx-auto flex-wrap mt-2'>
                        <span className="" >E - </span>
                        <Button className='pointsbtn' >1.0 Point</Button>
                    </div>
                </div>

                <div className="col">
                <div className=' input-group-sm mb-3 mx-auto flex-wrap mt-2'>
                        <span className="" >F - </span>
                        <Button className='pointsbtn' >0.0 Points</Button>
                    </div>
                </div>
            </div>


        </div>
            <Container className="d-flex mx-auto ">
                <div className="d-flex mx-auto mt-5"> 
                    <h5 className="widget-title">Input Your Scores <span></span> </h5>
                </div>
            </Container>

            <div></div>

    </Container>

    )
}

export default DetailsForCalculation