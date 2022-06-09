import React from "react";
import { Link } from "react-router-dom";

const StudentRow = ({ data }) => {
  const { name, img, home_city, technology, shift, interest } = data;
  return (
    <tr>
      <td>
        <div class="flex items-center space-x-3">
          <div class="avatar">
            <div class="mask mask-squircle w-12 h-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div class="font-bold">{name}</div>
            <div class="text-sm opacity-50">{home_city}</div>
          </div>
        </div>
      </td>
      <td>
        {technology}
        <div className="sm">
          <span class="badge badge-ghost badge-sm">Shit:{shift}</span>
        </div>
      </td>
      <td>{interest}</td>
      <th>
        <div class="dropdown dropdown-bottom dropdown-end">
          <label tabindex="0" class=" cursor-pointer m-1">
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
            tabindex="0"
            class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/details">Details</Link>
            </li>
            <li>
              <button>Delete</button>
            </li>
          </ul>
        </div>
      </th>
    </tr>
  );
};

export default StudentRow;
