import React from "react";

export const Services = () => {
  return (
    <>
      <section className="container py-10">
        <div className="bg-gradient-to-r from-white to-gray-100 py-0">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            <img
              className="w-full md:w-1/2 transition-transform duration-300 hover:scale-95 rounded-md"
              src="./images/cropped 2.jpg"
              alt=""
            />
            <div className="w-full md:w-1/2 p-6 md:p-10 bg-[#FCFCFC] shadow-lg">
              <h5 className="text-sm md:text-xs font-bold font-serif pb-4 text-customButton tracking-wide">
                OUR RESTAURANT
              </h5>
              <h4 className="text-lg md:text-xl font-semibold pb-3">
                Dining & Drinks
              </h4>
              <p className="text-xs md:text-sm pb-6 md:pb-10 text-[#9090a2] font-serif">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                accusantium praesentium sequi nam adipisci quis blanditiis, quod
                laborum nulla aperiam.
              </p>
              <button className="border-2 border-customButton border-solid rounded-md p-2 hover:bg-customButton hover:text-white transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-white to-gray-100 py-0">
          <div className="container mx-auto flex flex-col md:flex-row-reverse items-center">
            <img
              className="w-full md:w-1/2 transition-transform duration-300 hover:scale-95 rounded-md"
              src="./images/cropped 1.jpg"
              alt=""
            />
            <div className="w-full md:w-1/2 p-6 md:p-10 bg-[#FCFCFC] shadow-lg text-end">
              <h5 className="text-sm md:text-xs font-bold font-serif pb-4 text-customButton tracking-wide">
                OUR POOL
              </h5>
              <h4 className="text-lg md:text-xl font-semibold pb-3">
                Swimming Pool
              </h4>
              <p className="text-xs md:text-sm pb-6 md:pb-10 text-[#9090a2] font-serif">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                accusantium praesentium sequi nam adipisci quis blanditiis, quod
                laborum nulla aperiam.
              </p>
              <button className="border-2 border-customButton border-solid rounded-md p-2 hover:bg-customButton hover:text-white transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
