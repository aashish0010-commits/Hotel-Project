import React from 'react'

function Contact() {
  return (
    <section>
        <div className=" container bg-gray-100 min-h-screen flex flex-col items-center justify-center py-10">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-[70%] w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Get in Touch</h1>
        
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customButton"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customButton"
              required
            />
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-gray-700 text-sm font-medium mb-2">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customButton"
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customButton"
              required
            ></textarea>
          </div>
          
          <div className='flex justify-center'>
          <button
            type="submit"
            className="md:w-[50%] w-[70%] md-px-10 py-3 bg-customButton text-white font-semibold rounded-lg hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-customButton transition duration-200"
          >
            Send Message
          </button>
          </div>
        </form>
      </div>

      <div className="mt-10 text-center">
        <h2 className="text-xl font-semibold text-gray-800">Contact Information</h2>
        <p className="mt-2 text-gray-600">You can also reach us through the following:</p>
        <ul className="mt-4">
          <li className="flex items-center justify-center mb-2">
            <span className="text-gray-700 mr-2"><i class="bi bi-geo-alt-fill text-customButton"></i></span>
            <span className="text-gray-800">44601-Kathmandu, Nepal</span>
          </li>
          <li className="flex items-center justify-center mb-2">
            <span className="text-gray-700 mr-2"><i class="bi bi-telephone-fill text-customButton"></i></span>
            <span className="text-gray-800">+977 9869100969</span>
          </li>
          <li className="flex items-center justify-center mb-2">
            <span className="text-gray-700 mr-2"><i class="bi bi-envelope-arrow-up-fill text-customButton"></i></span>
            <span className="text-gray-800">nepal.aashish00@gmail.com</span>
          </li>
        </ul>
      </div>
    </div>
    </section>
    
  )
}

export default Contact