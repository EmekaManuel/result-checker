import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import { useState } from "react";

function CloneRealSgpa() {
  const [courses, setCourses] = useState([]);
  const [sgpa, setSgpa] = useState(0);

  const handleAdd = () => {
    setCourses([...courses, { name: "", credit: 0, grade: "" }]);
  };

  const handleDelete = (index) => {
    setCourses(courses.filter((course, i) => index !== i));
  };

  const handleChange = (event, index, field) => {
    const newCourses = [...courses];
    newCourses[index][field] = event.target.value;
    setCourses(newCourses);
  };

  const handleCalculate = () => {
    let totalCredits = 0;
    let totalPoints = 0;

    courses.forEach((course) => {
      const credits = course.credit;
      totalCredits = totalCredits += parseFloat(credits);

      let grade = course.grade;
      let points;

      switch (grade) {
        case "-":
          points = 0.0;
          break;
        case "A":
          points = 4.0;
          break;
        case "B+":
          points = 3.3;
          break;
        case "B":
          points = 3.0;
          break;
        case "B-":
          points = 2.7;
          break;
        case "C+":
          points = 2.3;
          break;
        case "C":
          points = 2.0;
          break;
        case "C-":
          points = 1.7;
          break;
        case "D+":
          points = 1.3;
          break;
        case "D":
          points = 1.0;
          break;
        case "F":
          points = 0;
          break;
        default:
          points = points;
      }

      totalPoints += credits * points;

      console.log(credits, points, totalPoints, totalCredits);
    });
    const calculatedSgpa = totalPoints / totalCredits;
    setSgpa(calculatedSgpa);
  };

  return (
    <div className="sgpa-body">
      <Container>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-12 d-flex mx-auto">
              <div className="d-flex text-text mx-auto ">
                {`Your Cumulative Average is ${sgpa.toFixed(1)} Points`}
              </div>
            </div>
          </div>
        </div>
      </Container>

      {courses.map((course, index) => (
        <div key={index}>
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
                      placeholder="Course name"
                      value={course.name}
                      onChange={(e) => handleChange(e, index, "name")}
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
                      value={course.credit}
                      onChange={(e) => handleChange(e, index, "credit")}
                    >
                      <option value={0}>0 </option>
                      <option value={4}>4 Units</option>
                      <option value={3}>3 Units</option>
                      <option value={2}>2 Units</option>
                      <option value={1}>1 Units</option>
                    </select>
                  </div>

                  <div className="input-group col-sm-6 col-md-4 input-group-sm mb-3 mx-auto mt-2">
                    <span className="input-group-text" id="basic-addon1">
                      Grade
                    </span>
                    <select
                      className="form-select  form-select-sm"
                      value={course.grade}
                      onChange={(e) => handleChange(e, index, "grade")}
                      id="inputGroupSelect"
                    >
                      <option value="-">-</option>
                      <option value="A">A</option>
                      <option value="B+">B+</option>
                      <option value="B">B</option>
                      <option value="B-">B-</option>
                      <option value="C+">C+</option>
                      <option value="C">C</option>
                      <option value="C-">C-</option>
                      <option value="D+">D+</option>
                      <option value="D">D</option>
                      <option value="F">F</option>
                    </select>
                  </div>

                  <div className="col">
                    <div className="flex-nonwrap mt-2 mx-auto">
                      <Button
                        className="btn-sm"
                        variant="danger"
                        onClick={() => handleDelete(index)}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      ))}

      <Container>
        <div className="container d-flex mx-auto ">
          <div className="d-flex mx-auto mt-2 mb-2">
            <Button variant="warning" className="add-btn" onClick={handleAdd}>
              {" "}
              Add New Course{" "}
            </Button>
          </div>
        </div>
      </Container>

      <Container>
        <div className="container d-flex mx-auto">
          <div className="d-flex mx-auto mt-2 mb-5">
            <Button
              variant="warning"
              className="add-btn"
              onClick={handleCalculate}
            >
              Compile Result Sheet
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default CloneRealSgpa;
