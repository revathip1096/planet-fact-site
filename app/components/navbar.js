"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 w-full z-10">
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
          <Link href="/" className="flex items-center">
            <span className="text-2xl whitespace-nowrap dark:text-white font-bold text-2xl/4">
              THE PLANETS
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`w-5 h-5 ${isMenuOpen ? "hidden" : "block"}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`w-full md:flex md:w-auto ${
              isMenuOpen ? "block" : "hidden"
            }`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="/planets/mercury"
                  className="block py-2 pl-3 pr-4 text-blue-700 rounded md:text-white md:bg-transparent md:p-0 font-family-[spartan] font-weight-700"
                >
                  MERCURY
                </Link>
                <span className="before:block before:h-[2px] before:w-[100%] before:bg-white before:absolute before:left-0 before:opacity-0 before:transition-all before:duration-[0.2s] hover:before:opacity-1"></span>
              </li>
              <li>
                <Link
                  href="/planets/venus"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:text-white md:bg-transparent md:p-0 dark:text-white dark:hover:bg-gray-700"
                >
                  VENUS
                </Link>
              </li>
              <li>
                <Link
                  href="/planets/earth"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:text-white md:bg-transparent md:p-0 dark:text-white dark:hover:bg-gray-700"
                >
                  EARTH
                </Link>
              </li>
              <li>
                <Link
                  href="/planets/mars"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:text-white md:bg-transparent md:p-0 dark:text-white dark:hover:bg-gray-700"
                >
                  MARS
                </Link>
              </li>
              <li>
                <Link
                  href="/planets/jupiter"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:text-white md:bg-transparent md:p-0 dark:text-white dark:hover:bg-gray-700"
                >
                  JUPITER
                </Link>
              </li>
              <li>
                <Link
                  href="/planets/saturn"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:text-white md:bg-transparent md:p-0 dark:text-white dark:hover:bg-gray-700"
                >
                  SATURN
                </Link>
              </li>
              <li>
                <Link
                  href="/planets/uranus"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:text-white md:bg-transparent md:p-0 dark:text-white dark:hover:bg-gray-700"
                >
                  URANUS
                </Link>
              </li>
              <li>
                <Link
                  href="/planets/neptune"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:text-white md:bg-transparent md:p-0 dark:text-white dark:hover:bg-gray-700"
                >
                  NEPTUNE
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
