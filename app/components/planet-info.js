"use client"
import React, { useState } from "react"; // Import the Tabs component
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import Image from "next/image";

const Planet = () => {
  return (
    <div className="py-20 px-20">
      <div className="flex">
        <div className="w-9/12 flex justify-center items-center">
          {/* Content for the left column */}
          <img src="./assets/geology-mercury.png" alt="Mercury" />
        </div>
        <div className="w-3/12 p-4 mt-20 mr-20">
          {/* Content for the right column */}
          <h2 className="text-3xl font-semibold mb-4">MERCURY</h2>

          {
            "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth."
          }
          <div className="flex text-l font-semibold mt-4">
            <h3 className=" ">Source:</h3>
            <div className="flex ">
              <a
                href="https://en.wikipedia.org/wiki/Mercury_(planet)"
                className="underline ml-2"
              >
                Wikipedia
              </a>
              <FaExternalLinkSquareAlt className="mt-[4px] ml-2" />
            </div>
          </div>


         {/* Render the Tabs component here */}
        </div>
      </div>
      <div className="flex justify-center gap-10 mt-[50px]  ">
        <span className="block max-w-sm p-8 px-[64px] border border-white-200">
          <h5 className="font-normal text-gray-700 dark:text-gray-400">
            ROTATION TIME
          </h5>
          <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            58.6 DAYS
          </p>
        </span>
        <span className="block max-w-sm p-8 px-[64px] border border-white-200">
          <h5 className="font-normal text-gray-700 dark:text-gray-400">
            REVOLUTION TIME
          </h5>
          <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            87.97 DAYS
          </p>
        </span>
        <span className="block max-w-sm p-8 px-[64px] border border-white-200">
          <h5 className="font-normal text-gray-700 dark:text-gray-400">RADIUS</h5>
          <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            2,439.7 KM
          </p>
        </span>
        <span className="block max-w-sm p-8 px-[64px] border border-white-200">
          <h5 className="font-normal text-gray-700 dark:text-gray-400">
            AVERAGE TEMP.
          </h5>
          <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            430&deg;C
          </p>
        </span>
      </div>
    </div>
  );
};

export default Planet;
