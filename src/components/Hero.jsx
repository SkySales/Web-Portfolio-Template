import React from 'react'
import Typed from 'react-typed';
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import AnimatedCursor from "react-animated-cursor"

const Hero = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 900,
      behavior: 'smooth'
    })
  }
  return (
    <div className='text-white h-screen'>
      <div className='flex justify-between items-center h-24 mx-auto px-4'>
      </div>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
              <AnimatedCursor
                innerSize={12}
                outerSize={12}
                color='153, 0, 153'
                outerAlpha={0.4}
                innerScale={0.7}
                outerScale={5}
                clickables={[
                  'a',
                  'input[type="text"]',
                  'input[type="email"]',
                  'input[type="number"]',
                  'input[type="submit"]',
                  'input[type="image"]',
                  'label[for]',
                  'select',
                  'textarea',
                  'button',
                  '.link',
                  'li'
                ]}
              />
            <MouseParallaxContainer globalFactorX={0.2} globalFactorY={0.2}>
                  <MouseParallaxChild factorX={0.3} factorY={0.5}>
                  <div className=''>
                      <h2 className='text-xl font-bold text-[#0afff3] p-2'>Hi, I'm Marc Ross Amaba</h2>
                      <div>
                          <p className='md:text-xl sm:text-4xl text-xl font-bold font-mono'>
                            Aspiring 
                            <Typed className='md:text-xl sm:text-4xl font-bold text-[#4be7df]' strings={['"Software"', '"Website"']} typeSpeed={120} backSpeed={80} loop />
                            Developer 
                          </p>
                      </div>
                    </div>
                    <button className='bg-[#00df9a] w-[150px] rounded-md font-medium my-5 mx-auto py-2 bg-gradient-to-r from-sky-300 to-blue-500 hover:from-violet-400 hover:to-orange-400 hover:animate-pulse' onClick={handleClick}>Get Started</button>
                  </MouseParallaxChild>
             </MouseParallaxContainer>
            </div>
    </div>
  )
}
export default Hero