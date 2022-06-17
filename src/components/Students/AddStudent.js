import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddStudent = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [spinner, setSpinner] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const onSubmit = (data) => {
    fetch(`http://localhost:5000/student/?roll=${data.roll}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSpinner(false);
        if (data._id) {
          setErrorMessage(
            "This Student Already Exist! Please Enter The valid Information"
          );
        } else {
          setErrorMessage("");
        }
      });
    console.log(data);
  };
  return (
    <div className="max-w-[1100px] mx-auto  text-gray-600 h-full">
      <h2 className="text-2xl  text-center  text-primary font-semibold my-12">
        Add A Student{" "}
      </h2>
      <div className="form-container border shadow lg:p-4 p-2 mx-2 rounded-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="sm-group grid grid-cols-1 lg:grid-cols-2 gap-8 my-4 ">
            <div className="name">
              <label htmlFor="name" className="block text-xl ">
                Full Name <sup>*</sup>
              </label>
              <input
                type="text"
                placeholder="Type Here"
                {...register("name", { required: true, minLength: 3 })}
                className="input input-bordered input-primary  w-full bg-transparent"
              />
              <label htmlFor="name" className="text-red-500">
                {errors.name?.type === "required" && (
                  <span>Name field is required</span>
                )}
                {errors.name?.type === "minLength" && (
                  <span>Minimum name length three character</span>
                )}
              </label>
            </div>
            <div className="roll">
              <label htmlFor="roll" className="block text-xl">
                Student Roll <sup>*</sup>
              </label>
              <input
                type="number"
                placeholder="Type Here"
                {...register("roll", {
                  required: true,
                  minLength: 5,
                  maxLength: 7,
                })}
                className="input input-bordered input-primary  w-full bg-transparent"
              />
              <label htmlFor="roll" className="text-red-500">
                {errors.roll?.type === "required" && (
                  <span>Roll field is required</span>
                )}
                {errors.roll?.type === "minLength" && (
                  <span>Minimum roll length five character</span>
                )}
                {errors.roll?.type === "maxLength" && (
                  <span>Maximum roll length seven character</span>
                )}
              </label>
            </div>
          </div>
          <div className="sm-group grid grid-cols-1 lg:grid-cols-2 gap-8 my-4 ">
            <div className="district">
              <label htmlFor="name" className="block text-xl">
                Select Technology
              </label>
              <select
                {...register("technology")}
                class="select select-primary w-full outline-0 bg-transparent border border-primary "
              >
                <option selected>Computer</option>
                {/* <option>Civil</option>
                <option>Electronics</option>
                <option>Refrigeration</option>
                <option>Environmental </option> */}
              </select>
            </div>
            <div className="shift">
              <label htmlFor="name" className="block text-xl">
                Select Shift
              </label>
              <select
                {...register("shift")}
                class="select select-primary w-full outline-0 bg-transparent border border-primary "
              >
                <option selected>1st</option>
                <option>2nd</option>
              </select>
            </div>
          </div>
          <div className="sm-group grid grid-cols-1 lg:grid-cols-2 gap-8 my-4 ">
            <div className="district">
              <label htmlFor="name" className="block text-xl">
                Select Interested Technologies(Interning)
              </label>
              <select
                {...register("interest")}
                class="select select-primary w-full outline-0 bg-transparent border border-primary "
              >
                <option selected>Web Development</option>
                <option>Networking</option>
                <option>Apps Development</option>
                <option>Graphics Design</option>
                <option>Digital Marketing</option>
                <option>Machine Learning</option>
              </select>
            </div>
            <div className="district">
              <label htmlFor="district" className="block text-xl">
                Home District <sup>*</sup>
              </label>
              <input
                type="text"
                placeholder="Type Here"
                {...register("home_city", { required: true, minLength: 3 })}
                className="input input-bordered input-primary  w-full bg-transparent"
              />
              <label htmlFor="name" className="text-red-500">
                {errors.home_city?.type === "required" && (
                  <span>District field is required</span>
                )}
                {errors.home_city?.type === "minLength" && (
                  <span>Minimum name length three character</span>
                )}
              </label>
            </div>
            {/* <div className="shift">
              <label htmlFor="name" className="block text-xl">
                Upload Your Professional Photo
              </label>
              <input
                type="file"
                name="image"
                className="input pt-[6px] input-bordered input-primary  w-full bg-transparent"
              />
            </div> */}
          </div>
          <div className="grid grid-cols-1">
            <div className="bio">
              <label htmlFor="message" className="block  text-xl">
                Student Message
              </label>
              <textarea
                class="textarea textarea-primary bg-transparent w-full "
                {...register("description")}
                placeholder="message"
              ></textarea>
            </div>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          </div>
          <div className="add-btn my-6">
            <button
              type="submit"
              className="text-xl btn px-4 py-2 btn-primary  shadow-md text-white"
            >
              Add Now{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
