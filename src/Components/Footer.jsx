import React from "react";

const FooterSection = ({ title, items, children }) => (
  <div className="w-full md:w-1/4 text-center">
    <h3 className="text-xl text-white py-4">{title}</h3>
    <ul className="text-[#868C98] space-y-2">
      {items.map((item, index) => (
        <li key={index} className={item.className}>
          <a
            className={`hover:text-customButton transition-all duration-300 ${item.linkClassName}`}
            href={item.href}
          >
            {item.content}
          </a>
        </li>
      ))}
    </ul>
    {children}
  </div>
);

const Footer = () => {
  return (
    <div className="bg-[#16161A]">
      <div className="container mx-auto flex flex-wrap justify-between items-start py-10">
        <div className="w-full md:w-1/4 text-center">
          <h3 className="text-customButton font-bold text-2xl font-serif py-4 ">
            Maxium
          </h3>
          <ul className="text-white flex gap-3 mb-4 justify-center">
            <li>
              <a
                className="transition-all duration-300  hover:text-customButton"
                href="#"
              >
                <i className="bi bi-facebook"></i>
              </a>
            </li>
            <li>
              <a
                className="transition-all duration-300 transform hover:scale-110 hover:text-customButton"
                href="#"
              >
                <i className="bi bi-twitter-x"></i>
              </a>
            </li>
            <li>
              <a
                className="transition-all duration-300  hover:text-customButton"
                href="#"
              >
                <i className="bi bi-globe"></i>
              </a>
            </li>
            <li>
              <a
                className="transition-all duration-300 ease-out hover:text-customButton"
                href="#"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </li>
          </ul>
        </div>

        <FooterSection
          title="Quick Links"
          items={[
            {
              content: "About Marian",
              href: "#",
              className: "quick-links-item",
              linkClassName: "",
            },
            {
              content: "Our Best Rooms",
              href: "#",
              className: "quick-links-item",
              linkClassName: "",
            },
            {
              content: "Our Photo Gallery",
              href: "#",
              className: "quick-links-item",
              linkClassName: "",
            },
            {
              content: "Pool Service",
              href: "#",
              className: "quick-links-item",
              linkClassName: "",
            },
          ]}
        />

        <FooterSection
          title="Reservations"
          items={[
            {
              content: "Tel: +977 9869100969",
              href: "#",
              className: "reservations-item",
              linkClassName: "",
            },
            {
              content: "Skype: Maxiumbooking",
              href: "#",
              className: "reservations-item",
              linkClassName: "",
            },
            {
              content: "reservations@hotelriver.com",
              href: "#",
              className: "reservations-item",
              linkClassName: "",
            },
          ]}
        />

        <FooterSection
          title="Our Location"
          items={[
            {
              content: "Thamel-44601",
              href: "#",
              className: "location-item",
              linkClassName: "",
            },
            {
              content: "Kathmandu, Nepal",
              href: "#",
              className: "location-item",
              linkClassName: "",
            },
          ]}
        >
          <form className="mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-[70%] p-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-customButton"
            />
            <button
              type="submit"
              className="mt-2 w-[40%] p-2 rounded-md bg-customButton text-white hover:bg-yellow-400 transition-all duration-300"
            >
              Send
            </button>
          </form>
        </FooterSection>
      </div>

      <p className="text-white text-sm text-center pb-2">
        Copyright ©2024 All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
