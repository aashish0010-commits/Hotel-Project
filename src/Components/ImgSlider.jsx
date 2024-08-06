import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

function ImgSlider() {
  return (
    <>
      <style>
        {`
          .mySwiper-hidden .swiper-button-prev,
          .mySwiper-hidden .swiper-button-next,
          .mySwiper-hidden .swiper-pagination {
            display: none !important;
          }
        `}
      </style>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper mySwiper-hidden" // Add a unique class name
      >
        <SwiperSlide>
          <div className="container-fluid text-center p-0">
            <div className="row no-gutters">
              <div className="col p-0">
                <img
                  src="./images/slider1.jpg"
                  alt="img1"
                  className="img-fluid w-100"
                />
              </div>
              <div className="col p-0">
                <img
                  src="./images/slider2.jpg"
                  alt="img2"
                  className="img-fluid w-100"
                />
              </div>
              <div className="col p-0">
                <img
                  src="./images/slider3.jpg"
                  alt="img3"
                  className="img-fluid w-100"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container-fluid text-center p-0">
            <div className="row no-gutters">
              <div className="col p-0">
                <img
                  src="./images/slider1.jpg"
                  alt=""
                  className="img-fluid w-100"
                />
              </div>
              <div className="col p-0">
                <img
                  src="./images/slider2.jpg"
                  alt=""
                  className="img-fluid w-100"
                />
              </div>
              <div className="col p-0">
                <img
                  src="./images/slider3.jpg"
                  alt=""
                  className="img-fluid w-100"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default ImgSlider;
