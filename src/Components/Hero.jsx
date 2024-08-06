import React from "react";

const Hero = () => {
  return (
    <div className="text-center text-white">
      <h1 className="font-serif font-semibold text-2xl md:text-4xl lg:text-6xl whitespace-nowrap">
        TOP HOTEL IN THE CITY
      </h1>
      <h3 className="text-xl md:text-2xl lg:text-4xl relative py-6 flex items-center justify-center">
        <span className="h-[2px] w-1/4 bg-customButton absolute left-0 md:left-12 lg:left-12"></span>
        Hotel & Resort
        <span className="h-[2px] w-1/4 bg-customButton absolute right-0 md:right-12 lg:right-12"></span>
      </h3>
    </div>
  );
};

export default Hero;
