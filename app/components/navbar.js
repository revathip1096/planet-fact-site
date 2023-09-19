"use client";

import React, { useState,useEffect } from "react";
import Link from "next/link";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import auth from "../firebase"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [user, setUser] = useState(null);
  const router = useRouter();
  useEffect(() => {
    console.log(typeof user);
    const storedUser = localStorage.getItem("user");
    setUser(storedUser);
  
    if (storedUser === "null" || storedUser === null || storedUser==="undefined") {
      router.push("/");
    }
  }, [router]);
  const signout=()=>{
    signOut(auth);
    localStorage.removeItem("user");
    router.push('/');
  }

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
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className="relative hover:before:bottom-[44px] hover:before:absolute hover:before:h-[4px] hover:before:content-[''] hover:before:w-full hover:before:bg-[#419db9]">
                <Link
                  href="/planets/mercury"
                  className="block py-2 pl-3 pr-4 text-blue-700 rounded md:text-white md:bg-transparent md:p-0 font-family-[spartan] font-weight-700"
                >
                  MERCURY
                </Link>
              </li>

              <li className="relative hover:before:bottom-[44px] hover:before:absolute hover:before:h-[4px] hover:before:content-[''] hover:before:w-full hover:before:bg-[#eda44a]">
                <Link
                  href="/planets/venus"
                  className="block py-2 pl-3 pr-4 text-gray-900 md:text-white md:bg-transparent md:p-0 dark:text-white "
                >
                  VENUS
                </Link>
              </li>
              <li className="relative hover:before:bottom-[44px] hover:before:absolute hover:before:h-[4px] hover:before:content-[''] hover:before:w-full hover:before:bg-[#6f2ed6]">
                <Link
                  href="/planets/earth"
                  className="block py-2 pl-3 pr-4 text-gray-900 md:text-white md:bg-transparent md:p-0 dark:text-white"
                >
                  EARTH
                </Link>
              </li>
              <li className="relative hover:before:bottom-[44px] hover:before:absolute hover:before:h-[4px] hover:before:content-[''] hover:before:w-full hover:before:bg-[#d14e33]">
                <Link
                  href="/planets/mars"
                  className="block py-2 pl-3 pr-4 text-gray-900 md:text-white md:bg-transparent md:p-0 dark:text-white"
                >
                  MARS
                </Link>
              </li>
              <li className="relative hover:before:bottom-[44px] hover:before:absolute hover:before:h-[4px] hover:before:content-[''] hover:before:w-full hover:before:bg-[#d93b36]">
                <Link
                  href="/planets/jupiter"
                  className="block py-2 pl-3 pr-4 text-gray-900 md:text-white md:bg-transparent md:p-0 dark:text-white"
                >
                  JUPITER
                </Link>
              </li>
              <li className="relative hover:before:bottom-[44px] hover:before:absolute hover:before:h-[4px] hover:before:content-[''] hover:before:w-full hover:before:bg-[#cb5020]">
                <Link
                  href="/planets/saturn"
                  className="block py-2 pl-3 pr-4 text-gray-900 md:text-white md:bg-transparent md:p-0 dark:text-white"
                >
                  SATURN
                </Link>
              </li>
              <li className="relative hover:before:bottom-[44px] hover:before:absolute hover:before:h-[4px] hover:before:content-[''] hover:before:w-full hover:before:bg-[#1ec2a4]">
                <Link
                  href="/planets/uranus"
                  className="block py-2 pl-3 pr-4 text-gray-900 md:text-white md:bg-transparent md:p-0 dark:text-white"
                >
                  URANUS
                </Link>
              </li>
              <li className="relative hover:before:bottom-[44px] hover:before:absolute hover:before:h-[4px] hover:before:content-[''] hover:before:w-full hover:before:bg-[#2d68f0]">
                <Link
                  href="/planets/neptune"
                  className="block py-2 pl-3 pr-4 text-gray-900 md:text-white md:bg-transparent md:p-0 dark:text-white"
                >
                  NEPTUNE
                </Link>
              </li>
              <li className="relative hover:before:bottom-[44px] hover:before:absolute hover:before:h-[4px] hover:before:content-[''] hover:before:w-full ">
                <button
                  onClick={signout}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded mt-[-10px]"
                >
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
