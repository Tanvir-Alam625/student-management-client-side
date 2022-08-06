import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div class="navbar bg-gray-100  w-max-[1100px] flex justify-center px-0">
      <div class="navbar-start ">
        <div class="dropdown">
          <label tabIndex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="text-black text-xl font-semibold ">
              <Link to="/">Manage </Link>
            </li>

            <li  className="text-black text-xl font-semibold ">
              <Link to="/addStudent">Add New Student</Link>
            </li>
          </ul>
        </div>
        <Link to="/" class="btn btn-ghost normal-case text-primary text-xl">
          BPI
        </Link>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
          <li className="text-black text-xl font-semibold ">
            <Link to="/">Manage </Link>
          </li>

          <li  className="text-black text-xl font-semibold ">
            <Link to="/addStudent">Add New Student</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
