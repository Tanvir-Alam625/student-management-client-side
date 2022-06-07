import React from "react";

const Students = () => {
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
        <form className="flex justify-center">
          <input
            type="number"
            required
            className=" border-2 border-primary px-4 py-2 rounded-l-md  shadow-md w-full max-w-xs bg-transparent outline-0"
            placeholder="Type Student Roll"
          />
          <button className="py-2 px-4 bg-primary text-white rounded-r-md font-semibold ">
            Search
          </button>
        </form>
      </div>
      <div className="flex justify-between mt-6  mb-2">
        <button className="btn btn-primary">See All Students</button>
        <button className="btn btn-primary"> Add New Student</button>
      </div>
      <div class="overflow-x-auto w-full">
        <table class="table w-full bg-transparent">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Technology</th>
              <th>Interest</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            <tr>
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">Hart Hagerty</div>
                    <div class="text-sm opacity-50">Panchagarh</div>
                  </div>
                </div>
              </td>
              <td>
                Computer
                <div className="sm">
                  <span class="badge badge-ghost badge-sm">
                    semester:7th shit:1st
                  </span>
                </div>
              </td>
              <td>Web Development</td>
              <th>
                <button class="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Students;
