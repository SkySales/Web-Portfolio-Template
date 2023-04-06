import React from 'react';
import {FaGithubSquare, FaReact} from 'react-icons/fa'
import Tilt from 'react-parallax-tilt';

const Cards = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 3500,
      behavior: 'smooth'
    })
  }
  return (
    <div className='w-full py-[10rem] px-4 bg-gradient-to-b from-sky-400 to-sky-500 rounded-lg'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <Tilt>
          <div className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 shadow-xl flex flex-col p-4 my-4 border-b-2 border-r-2 border-zinc-700 rounded-lg hover:scale-105 duration-300'>
              <h2 className='text-2xl font-bold text-center py-8'>Python Project</h2>
              <a href="https://github.com/SkySales/Health-Care-Hospital-Management-System" target="_blank">
                <button className='content-center text-4xl font-semibold font-mono hover:animate-pulse hover:text-cyan-500 pl-20 ml-11'><FaGithubSquare/></button>
                </a>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Terminal System</p>
                  <p className='py-2 border-b mx-8'>Python Hospital Care Management</p>
                  <p className='py-2 border-b mx-8'>Python Backend</p>
              </div>
          </div>
        </Tilt>
        <Tilt>
        <div className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 flex flex-col p-4 md:my-0 my-8 border-b-2 border-r-2 border-zinc-700 rounded-lg hover:scale-105 duration-300'>
              <h2 className='text-2xl font-bold text-center py-8'>PHP Backend Project</h2>
              <a href="https://github.com/SkySales/Ticket-Management-System" target="_blank">
              <button className='content-center text-4xl font-semibold font-mono hover:animate-pulse hover:text-cyan-500 pl-20 ml-11'><FaGithubSquare/></button>
                </a>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>PHP Backend Ticket System</p>
                  <p className='py-2 border-b mx-8'>HTML, CSS, PHP</p>
                  <p className='py-2 border-b mx-8'>Bootstrap Design</p>
              </div>
          </div>
        </Tilt>
          <Tilt>
          <div className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 w-full shadow-xl flex flex-col p-4 my-4 border-b-2 border-r-2 border-zinc-700 rounded-lg hover:scale-105 duration-300'>
              <h2 className='text-2xl font-bold text-center py-8'>React Web Project</h2>
              <p className='text-center text-4xl font-semibold pl-20 ml-11'><FaReact/></p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>React Web Portfolio</p>
                  <p className='py-2 border-b mx-8'>Front-End Project</p>
                  <p className='py-2 border-b mx-8'>React Framework</p>
              </div>
          </div>
          </Tilt>
          <button className='text-white w-[150px] rounded-md font-medium my-8 mx-auto py-2 bg-gradient-to-r from-sky-300 to-blue-500 hover:from-violet-400 hover:to-orange-400 hover:animate-pulse' onClick={handleClick}>Contact Me</button>
      </div>
    </div>
  );
};

export default Cards;