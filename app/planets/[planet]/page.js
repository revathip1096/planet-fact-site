"use client"
import React, { useState } from "react";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import Image from "next/image";
import data from "../../../public/data";
import Navbar from "../../../app/components/navbar";

const Planet = ({ params }) => {
  const [activeSection, setActiveSection] = useState("overview");

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const planetData = data.find((planet) => planet.name === params.planet);
  const { color } = planetData;

  if (!planetData) {
    return <div>Planet not found</div>;
  }

  const getSectionContent = () => {
    switch (activeSection) {
      case "overview":
        return planetData.overview.content;
      case "structure":
        return planetData.structure.content;
      case "geology":
        return planetData.geology.content;
      default:
        return ""; // Handle the case when an invalid section is selected
    }
  };

  const getSectionImage = () => {
    switch (activeSection) {
      case "overview":
        return [planetData.images.planet];
      case "structure":
        return [planetData.images.internal];
      case "geology":
        return [planetData.images.planet, planetData.images.geology];
      default:
        return ""; // Handle the case when an invalid section is selected
    }
  };

  return (
    <>
      <Navbar />

      <div className="p-4 lg:py-20 lg:px-20 lg:flex">
        <div className={`${getSectionImage().length === 1 ? "" : "relative flex justify-center mb-32"} lg:w-9/12 lg:flex lg:justify-center lg:items-center`}>
          {/* Content for the left column */}
          {getSectionImage().map((image, index) => <img
          key={index}
            src={image}
            alt={planetData.name}
            className={`${getSectionImage().length === 1 ? "" : index === 1 ? "absolute top-[48%] max-w-[50%] md:max-w-[20%] lg:max-w-[163px]" : ""} max-w-full h-auto mt-24 lg:mt-8`}
          />)}
          
        </div>
        <div className="lg:w-3/12 lg:p-4 lg:mt-20 lg:mr-20">
          {/* Content for the right column */}
          <h2 className="text-5xl font-semibold mb-4">
            {planetData.name.toUpperCase()}
          </h2>
          {getSectionContent()}
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
            <button
              style={{
                backgroundColor:
                  activeSection === "overview" ? color : "transparent",
              }}
              className={` text-[#ffffff] font-bold py-2 px-6 hover:bg-gray-400 mt-[70px] text-left  border border-white-200`}
              onClick={() => handleSectionChange("overview")}
            >
              01 &nbsp;&nbsp;OVERVIEW
            </button>
            <button
              style={{
                backgroundColor:
                  activeSection === "structure" ? color : "transparent",
              }}
              className={` text-[#ffffff] font-bold py-2 px-6 hover:bg-gray-400 mt-[10px] text-left border border-white-200`}
              onClick={() => handleSectionChange("structure")}
            >
              02 &nbsp;&nbsp;INTERNAL STRUCTURE
            </button>
            <button
              style={{
                backgroundColor:
                  activeSection === "geology" ? color : "transparent",
              }}
              className={` text-[#ffffff] font-bold py-2 px-6 hover:bg-gray-400 mt-[10px] text-left border border-white-200`}
              onClick={() => handleSectionChange("geology")}
            >
              03 &nbsp;&nbsp;SURFACE GEOLOGY
            </button>
          </div>
        </div>
      </div>
      <div className="lg:flex lg:justify-center lg:gap-10 lg:mt-20 lg:w-sm">
        <span className="block max-w-sm p-8 px-[62px] border border-white-200">
          <h5 className="font-normal text-gray-700 dark:text-gray-400">
            ROTATION TIME
          </h5>
          <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {planetData.rotation}
          </p>
        </span>
        <span className="block max-w-sm p-8 px-[62px] border border-white-200">
          <h5 className="font-normal text-gray-700 dark:text-gray-400">
            REVOLUTION TIME
          </h5>
          <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {planetData.revolution}
          </p>
        </span>
        <span className="block max-w-sm p-8 px-[62px] border border-white-200">
          <h5 className="font-normal text-gray-700 dark:text-gray-400">
            RADIUS
          </h5>
          <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {planetData.radius}
          </p>
        </span>
        <span className="block max-w-sm p-8 px-[62px] border border-white-200">
          <h5 className="font-normal text-gray-700 dark:text-gray-400">
            AVERAGE TEMP.
          </h5>
          <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {planetData.temperature}
          </p>
        </span>
      </div>
    </>
  );
};

export default Planet;
