import React from 'react';
import IMG_0174 from '../src/assets/IMG_0174.JPG';
import { TypeAnimation } from 'react-type-animation';



const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
      <img src={IMG_0174} alt="" className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'/>
      <h1 className='text-4xl font-bold'>
        I'm {""}
        <span className='animate- spin text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
          <TypeAnimation
      sequence={[
        // Start with the initial string.
        'Inderjeet Singh',
        // Wait 1 second...
        1000,
        //...then delete it.
        '', 
      ]}
      wrapper="span"
      speed={5}
      // deletionSpeed={10}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
    />

        </span>
        ,Full-Stack Developer
      </h1>
      <p className='mt-4 text-lg text-gray-300 '>
        I specialize in bulding modern and responsive Web applications.
      </p>

        <div className='mt-8 space-x-4'>
            <a href="#contact">
            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 rounded-full cursor-pointer'>Contact With Me</button>
            </a>

            <a href="/Inderjeet-Resume.pdf" target="_blank" 
            rel="noopener noreferrer"><button className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 rounded-full cursor-pointer'>Resume</button></a>

           
        </div>

    </div>
  );
};

export default Hero

