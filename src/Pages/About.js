import React from 'react'
import { AnimatedPages } from '../Components/AnimatedPages'
import Bulb from '../Assets/Images/Bulb.png'
import Deal from '../Assets/Images/Deal.png'

export default function Experience() {
  return (
    <AnimatedPages>
    <>
    <div className='grid grid-cols-3 my-12'>
      <div className='bg-[#3c8bca]'>
         <p className='text-center mt-6 text-semibold text-3xl text-white'>Our Mission</p>
      </div>
      <div>
        <img src={Bulb} alt='Bulb img'/>
      </div>
      <div className='bg-[#3c8bca]'>
      <p className='text-center mt-6 text-semibold text-3xl text-white'>Our Vission</p>
      </div>
    </div>    

    <h2 className='text-4xl text-semibold text-center mt-12 p-6' id="education-haeding">Our Plans To Help Your Business</h2>    
    <div className='grid grid-cols-3 my-12'>

    <div className='grid grid-rows-2 place-items-center bg-[#3c8bca]'>
             <div className='text-3xl text-semibold text-center text-white'>Conduct market research</div>
             <div className='text-3xl text-semibold text-center text-white'>Consider your goals</div>
    </div>

    <div>
        <img src={Deal} alt='Deal img'/>
    </div>

    <div className='grid grid-rows-2 place-items-center bg-[#3c8bca]'>
            <div className='text-3xl text-semibold text-center text-white'>Structure your campaign</div>
            <div className='text-3xl text-semibold text-center text-white'>Decide on channels</div>
    </div> 
    </div> 
    </>
    </AnimatedPages>
  )
}
