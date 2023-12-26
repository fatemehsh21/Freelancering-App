import React from "react";
import useUser from "../features/authentication/useUser";
import { HiOutlineUser } from "react-icons/hi";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import Logout from "../features/authentication/Logout";

function HeaderMenu() {
  return (
    <ul className="flex items-center gap-x-4">
      <li className="flex">
        <Link to="dashboard">
          <HiOutlineUser className="text-primary-900 h-5 w-5" />
        </Link>
      </li>
      <li className="flex">
        <DarkModeToggle />
      </li>
      <li className="flex">
        <Logout />
      </li>
    </ul>
  );
}

export default HeaderMenu;
