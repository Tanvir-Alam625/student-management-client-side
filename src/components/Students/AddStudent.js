import React from "react";

const AddStudent = () => {
  return (
    <div className="max-w-[1100px] mx-auto  text-gray-600 h-full">
      <h2 className="text-2xl  text-center  text-primary font-semibold my-12">
        Add A Student{" "}
      </h2>
      <div className="form-container border shadow lg:p-4 p-2 mx-2 rounded-md">
        <form action="">
          <div className="sm-group grid grid-cols-1 lg:grid-cols-2 gap-8 my-4 ">
            <div className="name">
              <label htmlFor="name" className="block text-xl ">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Type Here"
                name="name"
                className="input input-bordered input-primary  w-full bg-transparent"
              />
            </div>
            <div className="district">
              <label htmlFor="name" className="block text-xl">
                Home District
              </label>
              <input
                type="text"
                placeholder="Type Here"
                name="district"
                className="input input-bordered input-primary  w-full bg-transparent"
              />
            </div>
          </div>
          <div className="sm-group grid grid-cols-1 lg:grid-cols-2 gap-8 my-4 ">
            <div className="district">
              <label htmlFor="name" className="block text-xl">
                Select Technology
              </label>
              <select class="select select-primary w-full outline-0 bg-transparent border border-primary ">
                <option disabled selected>
                  Computer
                </option>
                <option>Civil</option>
                <option>Electronics</option>
                <option>Refrigeration</option>
                <option>Environmental </option>
              </select>
            </div>
            <div className="shift">
              <label htmlFor="name" className="block text-xl">
                Select Shift
              </label>
              <select class="select select-primary w-full outline-0 bg-transparent border border-primary ">
                <option disabled selected>
                  1st
                </option>
                <option>2nd</option>
              </select>
            </div>
          </div>
          <div className="sm-group grid grid-cols-1 lg:grid-cols-2 gap-8 my-4 ">
            <div className="district">
              <label htmlFor="name" className="block text-xl">
                Select Interested Technologies(Interning)
              </label>
              <select class="select select-primary w-full outline-0 bg-transparent border border-primary ">
                <option disabled selected>
                  Web Development
                </option>
                <option>Networking</option>
                <option>Apps Development</option>
                <option>Graphics Design</option>
                <option>Digital Marketing</option>
                <option>Machine Learning</option>
              </select>
            </div>
            <div className="shift">
              <label htmlFor="name" className="block text-xl">
                Upload Your Professional Photo
              </label>
              <input
                type="file"
                name="image"
                className="input pt-[6px] input-bordered input-primary  w-full bg-transparent"
              />
            </div>
          </div>
          <div className="grid grid-cols-1">
            <div className="bio">
              <label htmlFor="message" className="block  text-xl">
                Student Message
              </label>
              <textarea
                class="textarea textarea-primary bg-transparent w-full "
                name="message"
                placeholder="message"
              ></textarea>
            </div>
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
