import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

function Feedback() {
  return (
    <div className="container mx-auto py-20">
      <div className="h-[300px]">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="md:h-[350px] h-[500px]">
            <img
              src="./public/images/Feedback.jpg"
              className="rounded mx-auto block"
              alt="Testimonial"
            />
            <h5 className="mt-4 text-center text-gray-700  w-[50%] mx-auto">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Distinctio nobis rem minima corporis reprehenderit illum
              consectetur ipsam deleniti dolor laborum, vitae aperiam amet
              itaque ut dignissimos dolorum incidunt aliquam facere!
            </h5>
            <div className="flex justify-center mt-2 space-x-0">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="p-2 rounded-full">
                  <i className="bi bi-star-fill text-[#FFD43B]"></i>
                </div>
              ))}
            </div>
            <div className="md:py-2 py-4">
              <h4 className="container text-center font-bold font-serif">
                CLIFFORD FRAZIER,{" "}
                <span className="text-sm font-serif font-semibold text-[#A7A9A8]">
                  Regular Client
                </span>
              </h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./public/images/Feedback.jpg"
              className="rounded mx-auto block"
              alt="Testimonial"
            />
            <h5 className="mt-4 text-center text-gray-700  w-[50%] mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              voluptatum vel aspernatur debitis sed doloremque exercitationem
              tempore asperiores, ratione quae. Voluptatibus dolore ex
              consectetur facere deserunt quibusdam eligendi quos doloremque.
            </h5>
            <div className="flex justify-center mt-2 space-x-0 mx-auto">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="p-2 rounded-full">
                  <i className="bi bi-star-fill text-[#FFD43B]"></i>
                </div>
              ))}
            </div>
            <div className="py-2">
              <h4 className="container text-center font-bold font-serif">
                CLIFFORD FRAZIER,{" "}
                <span className="text-sm font-serif font-semibold text-[#A7A9A8]">
                  Regular Client
                </span>
              </h4>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Feedback;
