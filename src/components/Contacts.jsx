import { Input } from 'postcss';
import React from 'react';


const Contacts = () => {

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-gradient-to-b from-sky-500 to-sky-800 rounded-lg">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-sky-100/40 ring-2 ring-sky-300 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-sky-700 uppercase font-mono">
          Contact Form
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label>
              <span className="font-mono uppercase font-semibold text-gray-700">Your name</span>
              <input
                type="text"
                name="name"
                className="

            w-full
            block px-16 py-2 mt-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="Your Name"
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="font-mono uppercase font-semibold text-gray-700">Email address</span>
              <input
                name="email"
                type="email"
                className="
            block
            w-full
            mt-2 px-16 py-2
            border-sky-400
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="yournames@example.com"
                required
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span class="text-gray-700 font-mono uppercase font-semibold">Message</span>
              <textarea
                placeholder="Your Message"
                name="message"
                className="
            block
            w-full
            mt-2 px-16 py-8
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-sky-500
            focus:ring
            focus:ring-sky-800
            focus:ring-opacity-50
          "
                rows="5"
              ></textarea>
            </label>
          </div>

          <div class="mb-6">
            <button onClick=""
              type="submit"
              className="
            h-10
            px-5
            text-indigo-100
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            bg-gradient-to-r from-sky-800 to-blue-500 hover:from-violet-500 hover:to-green-500
          "
            >
              Contact Us
            </button>
          </div>
          <div></div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;