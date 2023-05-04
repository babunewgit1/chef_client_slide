import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import { MyContext } from "../../AuthProvidor/AuthProvidor";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const { user, Logout } = useContext(MyContext);

  const handelSignout = () => {
    Logout()
      .then(() => {
        toast.success("Logout successfull");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 py-4">
      <div className="mycontainer flex flex-wrap items-center justify-between mx-auto p-4">
        <Logo></Logo>
        <button
          onClick={() => setHidden(!hidden)}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto ${!hidden && "hidden"}`}
          id="navbar-default"
        >
          <ul className="font-medium flex md:items-center flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                id="linkNav"
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                id="linkNav"
                to="/blog"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Blog
              </NavLink>
            </li>
            <li>
              {user ? (
                <div className="pp flex items-center gap-3">
                  <div className="profilePic relative">
                    <img
                      className="w-10 h-10 cursor-pointer rounded-full border-2 border-orange-400"
                      src={user?.photoURL}
                      alt=""
                    />
                    {user?.displayName && (
                      <p className="absolute bgyell text-white whitespace-nowrap p-2 px-4 rounded-sm hoverpara">
                        {user?.displayName}
                      </p>
                    )}
                  </div>
                  <button
                    onClick={handelSignout}
                    className="block py-2 pl-3 pr-4 ml-8 text-white bgyell"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div>
                  <NavLink
                    id="login"
                    to="/login"
                    className="block py-2 pl-3 pr-4 text-white bgyell"
                  >
                    Login
                  </NavLink>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
      <Toaster />
    </nav>
  );
};

export default Navbar;
