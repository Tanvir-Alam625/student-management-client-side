import React from "react";

const Students = () => {
  return (
    <div className="font-sans max-w-[1100px] mx-auto">
      <div className="stu-header py-4">
        <h2 className="text-4xl text-center text-teal-600 font-semibold ">
          Student Management
        </h2>
        <h5 className="text-center text-2xl  text-teal-500">
          Barguna Polytechnic Institute
        </h5>
      </div>
      <div class="overflow-x-auto w-full">
        <table class="table w-full">
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
