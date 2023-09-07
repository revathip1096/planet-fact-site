import React from "react";
import {FaExternalLinkSquareAlt} from 'react-icons/fa';
import {data} from '../../public/data.js'

const Planet = () => {
  console.log(data);
  return (
    <div>
    <div className="flex">
      <div className="w-3/4 p-4">
        {/* Content for the left column */}
        <h2 className="text-xl font-semibold"></h2>
        {/* Add your content here */}
      </div>
      <div className="w-1/4 p-4 ml-[-120px] mt-[50px] ">
        {/* Content for the right column */}
        <h2 className="text-3xl font-semibold mb-[40px]">MERCURY</h2>

        {
          "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth."
        }
        <div className="flex text-l font-semibold mt-[30px]">
          <h3 className=" ">Source:</h3>
          < div className="flex ">
          <a
            href="https://en.wikipedia.org/wiki/Mercury_(planet)"
            className="underline ml-2"
          >
            Wikipedia
            
          </a>
          <FaExternalLinkSquareAlt className="mt-[4px] ml-2" />
          </div>
        </div>

        <div className="flex flex-col">
          <button className=" bg-[#419DB9] text-[#ffffff] font-bold py-2 px-4 rounded-xl hover:bg-gray-400 mt-[40px]">
            OVERVIEW
          </button>
          <button className=" bg-[#419DB9] text-[#ffffff] font-bold py-2 px-4 rounded-xl hover:bg-gray-400 mt-[10px]">
            INTERNAL STRUCTURE
          </button>
          <button className=" bg-[#419DB9] text-[#ffffff] font-bold py-2 px-4 rounded-xl hover:bg-gray-400 mt-[10px]">
            SURFACE GEOLOGY
          </button>
        </div>
      </div>
      </div>
      <div className="flex justify-center gap-10 mt-[50px]  ">
        <span
          class="block max-w-sm p-8 px-[70px] border border-white-200"
        >
          <h5 class="font-normal text-gray-700 dark:text-gray-400">
          ROTATION TIME
          </h5>
          <p class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            58.6 DAYS
          </p>
        </span>
        <span
          class="block max-w-sm p-8 px-[70px] border border-white-200"
        >
          <h5 class="font-normal text-gray-700 dark:text-gray-400">
            REVOLUTION TIME
          </h5>
          <p class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          87.97 DAYS
          </p>
        </span>
        <span
          class="block max-w-sm p-8 px-[70px] border border-white-200"
        >
          <h5 class="font-normal text-gray-700 dark:text-gray-400">
            RADIUS
          </h5>
          <p class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          2,439.7 KM
          </p>
        </span>
        <span
          class="block max-w-sm p-8 px-[70px] border border-white-200"
        >
          <h5 class="font-normal text-gray-700 dark:text-gray-400">
          AVERAGE TEMP.
          </h5>
          <p class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            430&deg;C
          </p>
        </span>
      </div>
    </div>
  );
};
export default Planet;
