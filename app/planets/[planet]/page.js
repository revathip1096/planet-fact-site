"use client"

import React from "react";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import Image from "next/image";
import data from "../../../public/data";
import Navbar from '../../../app/components/navbar'

const Planet = ({ params }) => {
  // Find the planet's data from the data array
  console.log(params.planet)
  
  const planetData = data.find((planet) => planet.name === params.planet);

  if (!planetData) {
    return <div>Planet not found</div>;
  }

  return (
    <>
    <Navbar />
    
    <div className="py-20 px-20">
      <div className="flex">
        <div className="w-9/12 flex justify-center items-center">
          {/* Content for the left column */}
          <img src={planetData.images.planet} alt={planetData.name} />
        </div>
        <div className="w-3/12 p-4 mt-20 mr-20">
          {/* Content for the right column */}
          <h2 className="text-3xl font-semibold mb-4">{planetData.name.toUpperCase()}</h2>
          {planetData.overview.content}
          <div className="flex text-l font-semibold mt-4">
            <h3 className=" ">Source:</h3>
            <div className="flex ">
              <a
                href={planetData.overview.source}
                className="underline ml-2"
                target="_blank"
                
              >
                Wikipedia
              </a>
              <FaExternalLinkSquareAlt className="mt-[4px] ml-2" />
            </div>
          </div>
          <div className="flex flex-col">
          <button className=" bg-[#419DB9] text-[#ffffff] font-bold py-2 px-6 hover:bg-gray-400 mt-[70px] text-left">
           01 &nbsp;&nbsp;OVERVIEW
          </button>
          <button className=" bg-[#419DB9] text-[#ffffff] font-bold py-2 px-6  hover:bg-gray-400 mt-[10px] text-left">
           02 &nbsp;&nbsp;INTERNAL STRUCTURE
          </button>
          <button className=" bg-[#419DB9] text-[#ffffff] font-bold py-2 px-6  hover:bg-gray-400 mt-[10px] text-left">
           03 &nbsp;&nbsp;SURFACE GEOLOGY
          </button>
        </div>
        </div>
      </div>
      <div className="flex justify-center gap-10 mt-[70px]  ">
        {/* Render other planet data here */}
        <span className="block max-w-sm p-8 px-[60px] border border-white-200">
          <h5 className="font-normal text-gray-700 dark:text-gray-400">
            ROTATION TIME
          </h5>
          <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {planetData.rotation}
          </p>
        </span>
        <span className="block max-w-sm p-8 px-[60px] border border-white-200">
          <h5 className="font-normal text-gray-700 dark:text-gray-400">
            REVOLUTION TIME
          </h5>
          <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {planetData.revolution}
          </p>
        </span>
        <span className="block max-w-sm p-8 px-[60px] border border-white-200">
          <h5 className="font-normal text-gray-700 dark:text-gray-400">
            RADIUS
          </h5>
          <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {planetData.radius}
          </p>
        </span>
        <span className="block max-w-sm p-8 px-[60px] border border-white-200">
          <h5 className="font-normal text-gray-700 dark:text-gray-400">
            AVERAGE TEMP.
          </h5>
          <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {planetData.temperature}
          </p>
        </span>
      </div>
    </div>
    </>
  );
};

export default Planet;
