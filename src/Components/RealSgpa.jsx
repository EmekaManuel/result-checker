import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import { useEffect, useState } from "react";

const RealSgpa = () => {
  ///////////////////// Hooks {useState & useEffect} //////////////////////////
  const [courses, setCourses] = useState([]);
  const [courseName, setCourseName] = useState("");
  const [courseCredit, setCourseCredit] = useState(0);
  const [courseGrade, setCourseGrade] = useState(0);
  const [placeholderValue, setPlaceholderValue] = useState("Subject Name");
  const [sgpa, setSgpa] = useState(0);

  // // useEffect(() => {
  //   calculateSGPA();
  // });

  ////////////////////// Functions   /////////////////////////
  const handleAdd = (event) => {
    event.preventDefault();
    const newCourse = {
      name: courseName,
      grade: courseGrade,
      credit: courseCredit,
    };
    console.log(newCourse);
    setCourses([...courses, newCourse]);
    setCourseName("");
    setCourseCredit(0);
    setCourseGrade(0);
    setPlaceholderValue("Subject Name");
  };
  const handleDelete = (index) => {
    const newCourses = [...courses];
    newCourses.splice(index, 1);
    setCourses(newCourses);
  };
  /////////////////// called function using useEffect /////////////////////////////
  const calculateSGPA = () => {
    if (!courses.length) return;

    let totalPoints = 0;
    let totalCredits = 0;

    courses.forEach((course) => {
      totalPoints += course.courseGrade * course.courseCredit;
      totalCredits += courseCredit;
    });

    if (totalPoints === 0) return;
    setSgpa(totalPoints / totalCredits);

    console.log(sgpa)
  };

  return (
    <div className="sgpa-body">
      <Container>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-12 d-flex mx-auto">
              <div className="d-flex text-text mx-auto ">
                {`Your Cumulative Average is ${sgpa} Points`}
              </div>
            </div>
          </div>
        </div>
      </Container>

      <ul>
        {courses.map((course, index) => (
          <li key={index}>
            <Container>
              <div className="container">
                <div className="x mx-auto mt-2 row d-flex justify-content-between">
                  <div className="row">
                    <div className="input-group col-sm-6 col-md-4 input-group-sm mb-3 mx-auto mt-2">
                      <span className="input-group-text" id="basic-addon1">
                        Course
                      </span>
                      <input
                        type="text"
                        value={courseName}
                        onChange={(event) => setCourseName(event.target.value)}
                        className="form-control"
                        placeholder={placeholderValue}
                        required
                        aria-label="Fullname"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div className="input-group col-sm-6 col-md-4 input-group-sm mb-3 mx-auto mt-2">
                      <span className="input-group-text" id="basic-addon1">
                        Credits
                      </span>
                      <select
                        className="form-select form-select-sm"
                        id="inputGroupSelect"
                        onChange={(event) =>
                          (course.courseCredit = event.target.value)
                        }
                        value={course.courseCredit}
                      >
                        <option value={0}>0 </option>
                        <option value={4}>4 Units</option>
                        <option value={2}>3 Units</option>
                        <option value={1}>2 Units</option>
                        <option value={1}>1 Units</option>
                      </select>
                    </div>

                    <div className="input-group col-sm-6 col-md-4 input-group-sm mb-3 mx-auto mt-2">
                      <span className="input-group-text" id="basic-addon1">
                        Grade
                      </span>
                      <select
                        className="form-select  form-select-sm"
                        onChange={(event) =>
                          (course.courseGrade = event.target.value)
                        }
                        value={course.courseGrade}
                        id="inputGroupSelect"
                      >
                        <option value={0}>0</option>
                        <option value={4}>A</option>
                        <option value={3}>B</option>
                        <option value={2}>C</option>
                        <option value={1.5}>D</option>
                        <option value={1}>E</option>
                        <option value={0}>F</option>
                      </select>
                    </div>

                    <div className="col">
                      <div className="flex-nonwrap mt-2 mx-auto">
                        <Button
                          className="btn-sm"
                          onClick={() => handleDelete(index)}
                          variant="danger"
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </li>
        ))}
      </ul>

      <Container>
        <div className="container d-flex mx-auto ">
          <div className="d-flex mx-auto mt-2 mb-2">
            <Button variant="warning" className="add-btn" onClick={handleAdd}>
              +
            </Button>
          </div>
        </div>
      </Container>

      <Container>
        <div className="container d-flex mx-auto">
          <div className="d-flex mx-auto mt-2 mb-5">
            <Button variant="warning" className="add-btn" onClick={calculateSGPA}>
              Compile Result Sheet
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RealSgpa;
