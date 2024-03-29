import { Result } from "postcss";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import StudentRow from "./StudentRow";

const Students = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [spinner, setSpinner] = useState(false);
  const [showAllStudents, setShowAllStudent] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    setSpinner(true);
    fetch("https://limitless-sands-95141.herokuapp.com/students")
      .then((res) => res.json())
      .then((data) => {
        setErrorMessage("");
        setStudents(data.reverse());
        setSpinner(false);
      });
  }, [showAllStudents]);

  const onSubmit = (data) => {
    setSpinner(true);
    const roll = parseInt(data.roll);
    fetch(`https://limitless-sands-95141.herokuapp.com/student/?roll=${roll}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSpinner(false);
        if (data._id) {
          setErrorMessage("");
          setStudents([data]);
        } else {
          setErrorMessage(data.message);
        }
      });
  };
  const handleShowAllStudents = () => {
    setShowAllStudent(!showAllStudents);
  };

  //handle delete studnet function 
  const hanldeDeleteStudent=(id)=>{
    const url = `http://localhost:5000/student/${id}`
    fetch(url,{
      method:"DELETE",
    }).then(res=>res.json())
    .then(result =>{
      console.log(result);
    })

  }
  const someCommmonStyle = {
    border : "2px solid #a991f7",
    color: "#000"
  }
  return (
    <div className="font-sans max-w-[1100px] mx-auto px-2">
      <div className="stu-header py-4">
        <h2 className="text-4xl text-center text-primary font-semibold ">
          Student Management
        </h2>
        <h5 className="text-center text-2xl  text-primary">
          Barguna Polytechnic Institute
        </h5>
      </div>
      <div className="search-container my-8 lg:w-2/5 md:w-2/3 w-full  mx-auto">
        <h2 className="text-xl my-3 text-primary  font-semibold text-center">
          Search Student
        </h2>
        {/* search form start  */}
        <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center">
          <input
            type="number"
            {...register("roll", {
              required: true,
              maxLength: 7,
              minLength: 5,
            })}
            className={` border-2 border-primary text-primary px-4 py-2 rounded-l-md  shadow-md w-full max-w-xs bg-transparent outline-0  ${
              errors.roll ? "border-red-500" : "border-primary"
            }`}
            placeholder="Type Student Roll"
          />
          <button
            disabled={spinner ? true : false}
            className="py-2 px-4 bg-primary text-white rounded-r-md font-semibold "
          >
            Search
          </button>
        </form>
        <div className="error-message my-4">
          <p className="text-center">
            {errors.roll?.type === "required" && (
              <span className="text-red-500">Search field is required</span>
            )}
            {errors.roll?.type === "maxLength" && (
              <span className="text-red-500">
                Roll maximum seven character{" "}
              </span>
            )}
            {errors.roll?.type === "minLength" && (
              <span className="text-red-500">Roll minimum five character</span>
            )}
          </p>
        </div>
      </div>
      {/* end search field  */}
      <div className="flex justify-between mt-6  mb-2">
        <button className="btn btn-primary" onClick={handleShowAllStudents}>
          See All Students
        </button>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/addStudent")}
        >
          {" "}
          Add New Student
        </button>
      </div>

      {/* Student table information  */}
      <div class="overflow-x-auto w-full py-12 h-auto">
        <table class="w-full  table-normal">
          {/* <!-- head --> */}
          <thead style={someCommmonStyle}>
            <tr style={someCommmonStyle}>
              <th style={someCommmonStyle}>Name</th>
              <th style={someCommmonStyle}>Technology</th>
              <th style={someCommmonStyle}>Interest</th>
              <th style={someCommmonStyle}>Action</th>
            </tr>
          </thead>
          {!errorMessage && (
            <tbody style={someCommmonStyle}>
              {/* <!-- row 1 --> */}

              {!spinner &&
                students?.map((student) => (
                  <StudentRow key={student.roll} data={student} hanldeDeleteStudent={hanldeDeleteStudent}  />
                ))}
            </tbody>
          )}
        </table>
        <div className="min-h-[200px]">
          {spinner && (
            <p className="text-xl text-primary text-center  my-4 ">
              Loading...
            </p>
          )}
          {errorMessage && (
            <p className="text-xl text-primary text-center  my-4 ">
              {errorMessage}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Students;
