import React from 'react'
import { AnimatedPages } from '../Components/AnimatedPages'
import Bulb from '../Assets/Images/Bulb.png'
import Deal from '../Assets/Images/Deal.png'

export default function Experience() {
  return (
    <AnimatedPages>
    <>
    <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 my-12'>
      <div className='bg-[#3c8bca] rounded-r-md' id='mission-div'>
         <p className='container mx-auto text-white text-justify font-semibold text-xl mt-10 p-6'>Hi Marketing can enhance your quality of work and helps your business to connect you to the world and make it professional to be more productive and successful.</p>
         <h2 className='text-center text-semibold text-4xl text-white my-12'>Our Mission</h2>
      </div>
      <div>
        <img src={Bulb} alt='Bulb img' className='scale-95 hover:scale-100 ease-in-out duration-500'/>
      </div>
      <div className='bg-[#3c8bca] rounded-l-md' id='vission-div'>
        <p className='container mx-auto text-white text-justify font-semibold text-xl mt-10 p-6'>We are here to help people and businesses in this the world and help them to realize their full potential abilities, Show them that they’re both personal and professional.</p>
        <h2 className='text-center text-semibold text-4xl text-white my-12'>Our Vission</h2>
      </div>
    </div>    

    <h2 className='text-4xl text-semibold text-center mt-12 p-6'>Our Plans To Help Your Business</h2>    
    <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 my-12'>

    <div className='grid grid-rows-2 place-items-center bg-[#3c8bca] rounded-r-md' id='about-plan-txt1'>
             <div className='text-3xl text-semibold text-center text-white p-6'>Conduct market research</div>
             <div className='text-3xl text-semibold text-center text-white p-6'>Consider your goals</div>
    </div>

    <div>
        <img src={Deal} alt='Deal img' className='scale-95 hover:scale-100 ease-in-out duration-500'/>
    </div>

    <div className='grid grid-rows-2 place-items-center bg-[#3c8bca] rounded-l-md' id='about-plan-txt2'>
            <div className='text-3xl text-semibold text-center text-white p-6'>Structure your campaign</div>
            <div className='text-3xl text-semibold text-center text-white p-6'>Decide on channels</div>
    </div> 
    </div> 
    </>
    </AnimatedPages>
  )
}
