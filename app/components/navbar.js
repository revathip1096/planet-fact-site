"use client"
import React from 'react'
import {data} from '../../public/data.js'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


const Navbar = () => {
 
  return (
    <div>
  
   <nav className="bg-white border-gray-200 dark:bg-gray-900 ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
    <a href="/" className="flex items-center">
      
      <span className="content-between self-center text-2xl whitespace-nowrap dark:text-white ml-[-70px] font-[antonio]
    font-bold
    text-2xl/4 ">THE PLANETS</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
      </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default ">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 mr-[-60px]">
      <li>
  <a
    href="/planets/mercury"
    className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 font-family-[spartan] font-weight-700"
    aria-current="page"
  >
    MERCURY
  </a>
  <span className="before:block before:h-[2px] before:w-[100%] before:bg-white before:absolute before:left-0 before:opacity-0 before:transition-all before:duration-[0.2s] hover:before:opacity-1"></span>
</li>

        <li>
          <a href="/planets/venus" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">VENUS</a>
        </li>
        <li>
          <a href="/planets/earth" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">EARTH</a>
        </li>
        <li>
          <a href="/planets/mars" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">MARS</a>
        </li>
        <li>
          <a href="/planets/jupiter" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">JUPITER</a>
        </li>
        <li>
          <a href="/planets/saturn" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">SATURN</a>
        </li>
        <li>
          <a href="/planets/uranus" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">URANUS</a>
        </li>
        <li>
          <a href="/planets/neptune" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">NEPTUNE</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
{/*</Router>
<Routes>
<Route exact path='/' element={< planet-info />}></Route>
<Route exact path='/venus' element={< planet-info />}></Route>
<Route exact path='/earth' element={< planet-info />}></Route>
<Route exact path='/mars' element={< planet-info />}></Route>
<Route exact path='/jupiter' element={< planet-info />}></Route>
<Route exact path='/saturn' element={< planet-info />}></Route>
<Route exact path='/uranus' element={< planet-info />}></Route>
<Route exact path='/neptune' element={< planet-info />}></Route>
</Routes> */}



    </div>
  )
}

export default Navbar