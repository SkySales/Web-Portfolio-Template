import React from 'react'
import codes from '../assets/coding.jpg'
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import AnimatedText from 'react-animated-text-content';


const Analytics = () => {
  const handleAnalyt = () => {
    window.scrollTo({
      top: 1900,
      behavior: 'smooth'
    })
  }
  return (
    <div className='w-full bg-white py-16 px-4 rounded-lg'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-1 pl-6'>
        <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
            <MouseParallaxChild factorX={0.3} factorY={0.5}>
             <img className='animate-pulse' src={codes} alt="" />
            </MouseParallaxChild>
        </MouseParallaxContainer>
        <div className='flex flex-col justify-center'>
            <p className='font-bold text-sky-300 font-mono text-xl'>ABOUT ME</p>
            <h1 className='uppercase font-bold font-mono'>EXPERIENCE AND SKILLS</h1>
            <AnimatedText
              type="words" // animate words or chars
              animation={{
                  x: '200px',
                  y: '-20px',
                  scale: 1.1,
                  ease: 'ease-in-out',
              }}
              animationType="lights"
              interval={0.06}
              duration={0.8}
              tag="h1"
              className='font-mono text-lg'
              includeWhiteSpaces
              threshold={0.1}
              rootMargin="20%"
              >
              I am eager to learn and advance my web development abilities as a newbie frontend and backend developer. I am excited to learn more about cutting-edge front-end frameworks like React and Angular. I have a basic understanding of front-end technologies including HTML, CSS, and JavaScript.
          </AnimatedText>
          <br></br>
          <AnimatedText
              type="words" // animate words or chars
              animation={{
                  x: '200px',
                  y: '-20px',
                  scale: 1.1,
                  ease: 'ease-in-out',
              }}
              animationType="lights"
              interval={0.06}
              duration={0.8}
              tag="h1"
              className='font-mono text-lg'
              includeWhiteSpaces
              threshold={0.1}
              rootMargin="20%"
              >
              I'm comfortable utilizing server-side programming languages like PHP and Python on the backend, and I'm curious to learn more about using Node.js to create scalable and effective server-side apps. I've worked with databases like MySQL before, and I'm eager to learn more about other databases like MongoDB and others.
          </AnimatedText>
          <br></br>
          <AnimatedText
              type="words" // animate words or chars
              animation={{
                  x: '200px',
                  y: '-20px',
                  scale: 1.1,
                  ease: 'ease-in-out',
              }}
              animationType="lights"
              interval={0.06}
              duration={0.8}
              tag="h1"
              className='font-mono text-lg'
              includeWhiteSpaces
              threshold={0.1}
              rootMargin="20%"
              >
              I am a devoted and diligent person that is always ready to go above and above to learn and advance my abilities.
          </AnimatedText>
        </div>
        <button className='text-white bg-[#00df9a] w-[150px] rounded-md font-medium my-5 mx-auto py-2 bg-gradient-to-r from-sky-300 to-blue-500 hover:from-violet-400 hover:to-orange-400 hover:animate-pulse' onClick={handleAnalyt}>Skills & Education</button>

        </div>
        
    </div>
  )
}

export default Analytics
