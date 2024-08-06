import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../Pages/Rooms_Module.css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const blogPosts = [
    {
      id: 1,
      img: "./images/sandwich.jpg",
      title:
        "5 Simple Tricks for Getting Stellar Hotel Service Wherever You Are",
      date: "July 17, 2024",
      author: "Aashish.N",
    },
    {
      id: 2,
      img: "./images/2.jpg",
      title:
        "5 Simple Tricks for Getting Stellar Hotel Service Wherever You Are",
      date: "July 17, 2024",
      author: "Aashish.N",
    },
    {
      id: 3,
      img: "./images/3.jpg",
      title:
        "5 Simple Tricks for Getting Stellar Hotel Service Wherever You Are",
      date: "July 17, 2024",
      author: "Aashish.N",
    },
  ];

  return (
    <>
      {/* Hero */}
      <div className="relative">
        {/* Your hero section */}
        <img
          className="w-full h-full object-cover filter brightness-10 opacity-90"
          src="./images/hotel_bg.jpg"
          alt="Hotel Background"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
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
        </div>
      </div>

      {/* Check-In */}

      <section className="container">
        <div className="relative flex flex-col md:flex-row items-center md:items-end justify-center p-6 md:p-10 bg-white shadow-lg rounded-md -top-[70px]">
          {/* Adjusted flex container for mobile and tablet */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 w-full md:w-auto">
            <div className="flex flex-col w-full md:w-auto">
              <label
                htmlFor="checkInDate"
                className="text-sm font-semibold mb-1"
              >
                Check In Date:
              </label>
              <input
                type="date"
                id="checkInDate"
                className="border-2 border-customButton rounded-md p-2 w-full md:w-auto"
              />
            </div>
            <div className="flex flex-col w-full md:w-auto">
              <label
                htmlFor="checkOutDate"
                className="text-sm font-semibold mb-1"
              >
                Check Out Date:
              </label>
              <input
                type="date"
                id="checkOutDate"
                className="border-2 border-customButton rounded-md p-2 w-full md:w-auto"
              />
            </div>
            <div className="flex flex-col w-full md:w-auto">
              <label htmlFor="adults" className="text-sm font-semibold mb-1">
                Adults:
              </label>
              <select
                id="adults"
                className="border-2 border-customButton rounded-md p-2 w-full md:w-auto"
              >
                {[1, 2, 3, 4, 5].map((number) => (
                  <option key={number} value={number}>
                    {number}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col w-full md:w-auto">
              <label htmlFor="children" className="text-sm font-semibold mb-1">
                Children:
              </label>
              <select
                id="children"
                className="border-2 border-customButton rounded-md p-2 w-full md:w-auto"
              >
                {[0, 1, 2, 3, 4, 5].map((number) => (
                  <option key={number} value={number}>
                    {number}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col w-full md:w-auto">
              <label htmlFor="rooms" className="text-sm font-semibold mb-1">
                Rooms:
              </label>
              <select
                id="rooms"
                className="border-2 border-yellow-500 rounded-md p-2 w-full md:w-auto"
              >
                {[1, 2, 3, 4, 5].map((number) => (
                  <option key={number} value={number}>
                    {number}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Book Now button */}
          <button className="mt-4 md:mt-0 md:ml-8 bg-yellow-500 text-white py-[10px]  px-4 rounded-md hover:bg-yellow-600 transition duration-300 w-full md:w-auto">
            Book Now
          </button>
        </div>
      </section>

      {/* About */}
      <section>
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
              className="w-3/4 h-auto object-cover rounded-md"
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
            <div className="w-full md:w-1/2 flex flex-col justify-center mt-4 px-5 md:px-10">
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

      {/* Rooms */}
      <section className="container mx-auto px-5">
        <div className="w-full py-20">
          <h1 className="text-center text-4xl font-bold font-serif pb-12">
            Our Rooms
          </h1>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper pb-[150px]"
          >
            <SwiperSlide className="swiper-slide-custom">
              <img src="./images/four.jpg" className="swiper-img" />
              <a href="#">$340 — Deluxe Room</a>
              <p className="swiper-text">
                Relax in our deluxe room offering stunning views and luxury.
              </p>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-custom">
              <img src="./images/one.jpg" className="swiper-img" />
              <a href="#">$250 — Couple Night</a>
              <p className="swiper-text">
                Enjoy a night stay in our couple room with good views and vibes.
              </p>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-custom">
              <img src="./images/three.jpg" className="swiper-img" />
              <a href="#">$200 — Executive Suite</a>
              <p className="swiper-text">
                Experience the ultimate comfort in our spacious executive suite.
              </p>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-custom">
              <img src="./images/five.jpg" className="swiper-img" />
              <a href="#">$170 — Family Room</a>
              <p className="swiper-text">
                Perfect for families, our family room offers ample space and
                amenities.
              </p>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-custom">
              <img src="./images/two.jpg" className="swiper-img" />
              <a href="#">$150 — Superior Room</a>
              <p className="swiper-text">
                Our superior room combines elegance with comfort for a memorable
                stay.
              </p>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-custom">
              <img src="./images/six.jpg" className="swiper-img" />
              <a href="#">$120 — Presidential Suite</a>
              <p className="swiper-text">
                Indulge in luxury in our presidential suite with top-notch
                facilities.
              </p>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-custom">
              <img src="./images/seven.jpg" className="swiper-img" />
              <a href="#">$120 — Junior Suite</a>
              <p className="swiper-text">
                Stay in our junior suite for a mix of style and convenience.
              </p>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-custom">
              <img src="./images/eight.jpg" className="swiper-img" />
              <a href="#">$100 — Penthouse</a>
              <p className="swiper-text">
                Our penthouse offers breathtaking views and unparalleled luxury.
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* ...//////////////Services */}
      <section className="bg-gradient-to-r from-white to-gray-100 py-0">
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
      </section>

      <section className="bg-gradient-to-r from-white to-gray-100 py-0">
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
      </section>

      {/* ///////////// Feedback */}

      <section>
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
                  src="./images/Feedback.jpg"
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
                  src="./images/Feedback.jpg"
                  className="rounded mx-auto block"
                  alt="Testimonial"
                />
                <h5 className="mt-4 text-center text-gray-700  w-[50%] mx-auto">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem voluptatum vel aspernatur debitis sed doloremque
                  exercitationem tempore asperiores, ratione quae. Voluptatibus
                  dolore ex consectetur facere deserunt quibusdam eligendi quos
                  doloremque.
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
      </section>

      {/* ////// Blogs */}

      <section>
        <div className="container mx-auto text-center pt-[100px]">
          <h1 className="text-3xl font-bold font-serif py-5">Our Blog</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <div key={post.id} className="border shadow-2xl p-4">
                <a href="#">
                  <img
                    src={post.img}
                    alt={`Blog ${post.id}`}
                    className="w-full transition-transform duration-300 ease-out hover:scale-105"
                  />
                </a>
                <div className="py-2">
                  <div className="flex justify-between items-center mb-3">
                    <li className="list-none border-2 border-solid rounded-md bg-customButton w-[50px] text-center text-xs font-semibold font-serif p-1 text-white">
                      News
                    </li>
                    <p className="text-customButton font-semibold">
                      <span className="text-[#C7C7C7]">by</span> {post.author}
                    </p>
                  </div>
                  <h5 className="font-semibold text-l pb-3">
                    <a
                      className="hover:text-customButton hover:transition-all"
                      href="#"
                    >
                      {post.title}
                    </a>
                  </h5>
                  <hr />
                  <div className="flex justify-between items-center text-[#ADADB8] py-3">
                    <p className="font-bold font-serif text-sm">{post.date}</p>
                    <i className="bi bi-chat-left-text-fill text-xs"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* /////////////////////// Img Slider */}
      <section>
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
        </Swiper>
      </section>
    </>
  );
};

export default Home;
