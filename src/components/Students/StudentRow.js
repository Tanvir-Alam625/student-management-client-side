import React from "react";
import { Link } from "react-router-dom";

const someCommmonStyle = {
  border : "2px solid #a991f7",
  color: "#000"
}
const StudentRow = ({ data, hanldeDeleteStudent, setDeleteSpinnerBtn }) => {
  const { name, img, home_city, technology, shift, interest, roll, _id } = data;
  return (
    <tr style={someCommmonStyle}>
      <td style={someCommmonStyle}>
        <div class="flex items-center space-x-3">
          <div>
            <div class="font-bold capitalize">{name}</div>
            <div class="text-sm opacity-50 capitalize">City: {home_city}</div>
            <div class="text-sm opacity-50">Roll: {roll}</div>
          </div>
        </div>
      </td>
      <td style={someCommmonStyle}>
        {technology}
        <div className="sm">
          <span class="badge badge-ghost badge-sm">Shit:{shift}</span>
        </div>
      </td>
      <td style={someCommmonStyle}>{interest}</td>
      <th style={someCommmonStyle}>
        <div class="dropdown dropdown-bottom dropdown-end">
          <label tabIndex="0" class=" cursor-pointer m-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            class="dropdown-content border menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/details" className="btn btn-primary mb-4">
                Update
              </Link>
            </li>
            <li>
              <button className="btn btn-error"
              onClick={()=>hanldeDeleteStudent(_id)}
              >Delete</button>
            </li>
          </ul>
        </div>
      </th>
    </tr>
  );
};

export default StudentRow;
