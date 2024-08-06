import React from "react";

const About = () => {
  return (
    <section className="pb-20">
      <div className="max-w-7xl mx-auto px-5 relative">
        {/* Example image positioned outside the About component */}
        <div
          className="hidden md:block absolute border-transparent rounded-md"
          style={{
            maxWidth: "50%", // Adjust the maximum width based on your design
            maxHeight: "100vh", // Adjust the maximum height to cover the viewport
            zIndex: 20,
            top: "26%", // Adjust the position from the top
            left: "1%", // Adjust the position from the left
            transformOrigin: "top left", // Ensure the image scales from the correct origin
            transform: "scale(0.8)", // Adjust the scale for zoom out effect
          }}
        >
          <img
            src="./images/ROOM.jpg"
            alt="Outside Image"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="block md:hidden flex justify-center items-center top-0 left-0 w-full h-full z-0">
          <img
            src="./images/ROOM.jpg"
            alt="Outside Image"
            className="w-4/4 h-auto object-cover rounded-md"
          />
        </div>

        <div className="bg-red bg-opacity-80 py-10 flex flex-col md:flex-row h-auto md:h-[400px]">
          {/* Left side content */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center mb-8 md:mb-0 relative">
            <img
              src="./images/box.jpg"
              alt="Box"
              className="hidden lg:block mx-auto h-[330px] w-[75%] ml-0 lg:ml-[230px]"
            />
            <div className="block lg:hidden mt-0 bg-gray-800 text-white px-2 py-2 rounded-lg shadow-lg animate-zoomInOut">
              25 Years of Service Experience
            </div>
          </div>
          <div className="absolute hidden lg:block lg:-bottom-0 left-[260px] bg-gray-800 text-white px-4 py-2 mb-4 rounded-lg shadow-lg animate-zoomInOut z-20 md:hidden">
            25 Years of Service Experience
          </div>
          {/* Right side content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center mt-4 px- md:px-10">
            <h4 className="text-lg font-semibold font-serif py-3 md:text-left">
              About our company
            </h4>
            <h2 className="text-2xl md:text-4xl font-bold pb-4 md:text-left text-justify">
              Make the customer the hero of your story
            </h2>
            <p className="text-base md:text-xl font-medium pb-4 md:text-left text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-sm md:text-base pb-4 md:text-left text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="text-white p-2 border-transparent border-solid rounded-md bg-customButton hover:bg-yellow-400">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
