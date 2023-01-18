import React, {useState} from 'react'
import {Container, Button} from "react-bootstrap"
import schoolData from "../Utilities/SchoolData.json"


const UserDetails = ()   => {
    
    const [facultyId, setFacultyId] = useState('');
    const [department, setDepartment] = useState([]);
    const [departmentId, setDepartmentId] = useState('');

    const handleFaculty = (e) => {
        const getFacultyId = e.target.value;

        const getDepartmentData = schoolData.find(faculty => faculty.faculty_id === getFacultyId)?.departments;

        setDepartment(getDepartmentData);



        // console.log(getFacultyId);
    }

    const handleDepartment = (e) => {
        const departmentId = e.target.value;
        setDepartmentId(departmentId)
    }
    
        return (
          <Container>
          <div className='mt-5'>
            
            <Container className="d-flex mx-auto" >
                <div className="d-flex mx-auto">
                      <h5 className="widget-title mt-2">Kindly Fill In Your Details <span></span> </h5>

                </div>
            </Container>
      
        <div className="form-group">
            <div className='input-group col-sm-6 sol-md-4 mb-3 mx-auto flex-nonwrap mt-2' >
              <span className="input-group-text" id="basic-addon1">Name</span>
              <input type="text" className="form-control" placeholder='Fullname' required aria-label='Fullname' aria-describedby='basic-addon1'></input>
          </div>
        </div>

      
        <div className="form-group">
        <div className="input-group col-sm-6 col-md-4  mb-3 mx-auto flex-nonwrap mt-2">
          <select className="form-select form-select-sm" onChange={(e) => (handleFaculty(e)) }
          aria-labelledby='Faculty select' id="dept">
              <option selected>-- Select Faculty -- </option>

                {
                    schoolData.map((getFaculty, index) => (
                        <option value={getFaculty.faculty_id} key={index}> {getFaculty.faculty_name}</option>

                    ))
                }
          
          </select>
          
          <select className="form-select form-select-sm"  aria-labelledby='Department select' onChange={(e) => (handleDepartment(e))} id="">
              <option selected>-- Select Department -- </option>
              
                {
              department.map((getDepartment, index) => (
                        <option value={getDepartment.department_id} key={index} >{getDepartment.department_name}</option>

                    ))
                }

          </select>
          
      
        </div>    
            </div>    
          
 
      
      
          </div>
          </Container>
          )
      }
      


export default UserDetails