"use client"
import React, { useState, useEffect } from "react";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import data from "../../../public/data";
import Navbar from "../../../app/components/navbar";
import auth from "../../firebase";
import { useRouter } from "next/navigation";


const Planet = ({ params }) => {
  const [activeSection, setActiveSection] = useState("overview");
  const [prevSection, setPrevSection] = useState("overview");

  const handleSectionChange = (section) => {
    setPrevSection(activeSection);
    setActiveSection(section);
  };
  const [user, setUser] = useState(null);
  const router = useRouter();
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    setUser(storedUser);
  
    if (storedUser === "null" || storedUser === null || storedUser==="undefined") {
      router.push("/");
    }
  }, [router]);
  

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
        return "";
    }
  };

  const getSectionImage = () => {
    switch (activeSection) {
      case "overview":
        return [planetData.images.planet];
      case "structure":
        return [planetData.images.internal];
      case "geology":
        return [ planetData.images.geology];
      default:
        return "";
    }
  };

  const slideVariants = {
    enter: {
      opacity: 0,
      x: ((prevSection=="geology"|| prevSection =="structure") && (activeSection =="structure"||activeSection=="overview"))?-100:100,
    },
    center: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      x: ((prevSection=="geology"|| prevSection =="structure") && (activeSection =="structure"||activeSection=="overview"))?100:-100,
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };
  


  

  useEffect(() => {
    // Update the animation direction when activeSection changes
    setPrevSection(activeSection);
    console.log(activeSection);
    console.log(prevSection);
  }, [activeSection]);

  return (
    <>
      <Navbar />

      <div className="p-4 lg:py-20 lg:px-20 lg:flex bg-black dark:bg-black">
        <div className={`${getSectionImage() ? "relative flex justify-center mb-32" : ""} lg:w-9/12 lg:flex lg:justify-center lg:items-center`}>
          {/* Content for the left column */}
          <AnimatePresence initial={false}>
            <div style={{ overflow: "hidden" }}>
              <motion.div
                key={activeSection}
                className={`${getSectionImage() ? "" : "absolute top-[48%] max-w-[50%] md:max-w-[20%] lg:max-w-[163px]"} max-w-full h-auto mt-24 lg:mt-8`}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <img
                  src={getSectionImage()}
                  alt={planetData.name}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </AnimatePresence>
        </div>
        
        <div className="lg:w-3/12 lg:p-4 lg:mt-20 lg:mr-20 text-white ">
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
      <div className="bg-black relative bottom-0  w-full lg:flex lg:justify-center lg:gap-10 lg:w-sm ">
        <span className="block max-w-sm p-8 px-[62px] border border-white-200">
          <h5 className="font-normal text-white dark:text-white">
            ROTATION TIME
          </h5>
          <p className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
            {planetData.rotation}
          </p>
        </span>
        <span className="block max-w-sm p-8 px-[62px] border border-white-200">
          <h5 className="font-normal text-white dark:text-white">
            REVOLUTION TIME
          </h5>
          <p className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
            {planetData.revolution}
          </p>
        </span>
        <span className="block max-w-sm p-8 px-[62px] border border-white-200">
          <h5 className="font-normal text-white dark:text-white">
            RADIUS
          </h5>
          <p className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
            {planetData.radius}
          </p>
        </span>
        <span className="block max-w-sm p-8 px-[62px] border border-white-200">
          <h5 className="font-normal text-white dark:text-white">
            AVERAGE TEMP.
          </h5>
          <p className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
            {planetData.temperature}
          </p>
        </span>
      </div>
    </>
  );
};

export default Planet;