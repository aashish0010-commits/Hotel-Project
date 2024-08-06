import React from "react";

function Blog() {
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
    <div className="container mx-auto text-center py-[30px]">
      <h1 className="text-3xl font-bold font-serif py-2">Our Blog</h1>
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
  );
}

export default Blog;
