import React from 'react';

const Planet = () =>{
    return(
        
        <div className="flex">
      <div className="w-3/4 p-4">
        {/* Content for the left column */}
        <h2 className="text-xl font-semibold"></h2>
        {/* Add your content here */}
      </div>
      <div className="w-1/4 p-4 ml-[-120px] mt-[50px] " >
        {/* Content for the right column */}
        <h2 className="text-3xl font-semibold mb-[40px]">MERCURY</h2>
        
        {"Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth."}
       <div className="flex text-l font-semibold mt-[30px]">
        <h3 className=" ">Source:
        </h3>
        <a href="https://en.wikipedia.org/wiki/Mercury_(planet)"  className="underline ml-2">Wikipedia</a>
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


        
    )

}
export default Planet;

