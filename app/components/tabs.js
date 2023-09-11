"use client"
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

const tabsData = [
  {
    title: "Overview",
    content:
      "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
  },
  {
    title: "Internal Structure",
    content:
      "Mercury's internal structure consists of a metallic core, silicate mantle, and a thin crust. The core makes up about 42% of its volume and is primarily composed of iron.",
  },
  {
    title: "Surface Geology",
    content:
      "Mercury's surface is characterized by vast plains, impact craters, and rocky terrain. It lacks an atmosphere, which leads to extreme temperature variations between day and night.",
  },
];

const TabContent = ({ title, content }) => {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4">{title}</h2>
      <p>{content}</p>
      <div className="flex text-l font-semibold mt-4">
        <h3>Source:</h3>
        <div className="flex ml-2">
          <a
            href="https://en.wikipedia.org/wiki/Mercury_(planet)"
            className="underline"
          >
            Wikipedia
          </a>
          <FaExternalLinkSquareAlt className="mt-1 ml-2" />
        </div>
      </div>
    </div>
  );
};

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabVariants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "100%" },
  };

  const changeTab = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="py-20 px-20">
      <div className="flex">
        <div className="w-9/12 flex justify-center items-center">
          {/* Content for the left column */}
          <img src="/assets/planet-mercury.svg" alt="Mercury" />
        </div>
        <div className="w-3/12 p-4 mt-20 mr-20">
          {/* Content for the right column */}
          <h2 className="text-3xl font-semibold mb-4">MERCURY</h2>
          <AnimatePresence >
            <motion.div
              key={activeTab}
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <TabContent {...tabsData[activeTab]} />
            </motion.div>
          </AnimatePresence>
          <div className="flex flex-col">
            {tabsData.map((tab, index) => (
              <button
                key={index}
                className={`${
                  activeTab === index
                    ? "bg-[#419DB9] text-[#ffffff] hover:bg-gray-400"
                    : "bg-gray-200 text-gray-600 hover:bg-gray-400"
                } font-bold py-2 px-4 mt-2`}
                onClick={() => changeTab(index)}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
