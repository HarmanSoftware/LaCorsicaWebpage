import React from 'react'
import Typewriter from 'typewriter-effect';

import LensAgency from '../Assets/Images/LensAgency.png'
export default function Home() {
    return (
    <>
        <div className='container mx-auto grid lg:grid-cols-2 sm:grid-cols-1 mt-12 sm:scale-100'>
        <div>
        <img className='rounded-l-lg hover:rounded-lg hover:scale-105 ease-in-out duration-500 sm:scale-100 sm:rounded-none' src={LensAgency} alt='Lens logo img'/>
        </div> 
        <div className='grid grid-cold-1 bg-lightmauve rounded-r-lg' id="type-writer-div">
        <div className='font-bold leading-relaxed rounded-r-lg p-12'> 
        <div className='p-24 -mx-12 -mb-12 text-4xl'>
        <Typewriter
  options={{
      strings: ['Lens Agency', 'For Digital Marketing'],
      autoStart: true,
      loop: true,
      deleteSpeed:(50)
    }}
/>
    </div>
    </div>      
      <div className='mx-auto'>
       <div>
        <a href='' target='_blank' rel="noreferrer">
        <button className='bg-soft-purple hover:bg-[#171515] hover:scale-105 ease-in-out duration-500 text-white lg:text-xl sm:text-lg font-medium w-72 h-16 rounded-lg m-2' id="github-btn">GitHub</button>
        </a>
       </div>
       <div>
        <a href='' target='_blank' rel="noreferrer">            
        <button className='bg-soft-purple hover:bg-[#0A66C2] hover:scale-105 ease-in-out duration-500 text-white lg:text-xl sm:text-lg font-medium w-72 h-16 rounded-lg m-2' id="linkedin-btn">LinkedIn</button>
        </a>
        </div>
       <div>
        <a href='' target='_blank' rel="noreferrer">
        <button className='bg-soft-purple hover:bg-[#D23A6F] hover:scale-105 ease-in-out duration-500 text-white lg:text-xl sm:text-lg font-medium w-72 h-16 rounded-lg m-2' id="instagram-btn">Instagram</button>
        </a>
       </div>
      </div>
        </div>      
       </div>
       
       <div className='bg-mauve mt-10 pt-4 pb-12' id="aboutme-div">
       <div className='scale-95 hover:scale-100 ease-in-out duration-500'>
       <h2 className='container mx-auto text-center font-semibold text-3xl mb-4 mt-4'>About Us</h2>
       <div id="aboutme-txt-div" className='container mx-auto p-10 bg-soft-purple text-white hover:bg-purple rounded-lg drop-shadow-md'>
       We are a full-service digital marketing team that specializes in helping businesses in all shapes and sizes
       We can help with everything from social media management photography/videography, website design and development and mobile application to online marketing and SEO.
       We also offer high quality video and content production and email marketing services.
       </div>
       </div>
       </div>

       <div className='bg-mauve mt-14 pt-4 pb-12' id="webskills-div">
       <div className='scale-95 hover:scale-100 ease-in-out duration-500'>
      <h2 className='container mx-auto text-center font-semibold text-3xl mt-6'> What We Provide?</h2>
      <div className='container mx-auto rounded-lg text-center font-normal grid lg:grid-cols-3 sm:grid-cols-2 gap-4 px-4 my-4 '>
      <div className='scale-95 hover:scale-100 ease-in-out duration-500'>
          <div className='text-lg bg-purple text-white hover:bg-soft-purple p-4 rounded-md drop-shadow-sm' id="web-skill-1">Social Media Management</div>
      </div>
      <div className='scale-95 hover:scale-100 ease-in-out duration-500'>
          <div className='text-lg bg-purple text-white hover:bg-soft-purple p-4 rounded-md drop-shadow-sm' id="web-skill-2">Photography / Videography</div>
      </div>
      <div className='scale-95 hover:scale-100 ease-in-out duration-500'>
          <div className='text-lg bg-purple text-white hover:bg-soft-purple p-4 rounded-md drop-shadow-sm' id="web-skill-3">Website Development</div>
      </div>
      <div className='scale-95 hover:scale-100 ease-in-out duration-500'>
          <div className='text-lg bg-purple text-white hover:bg-soft-purple p-4 rounded-md drop-shadow-sm' id="web-skill-4">Mobile Application Development</div>
      </div>
      <div className='scale-95 hover:scale-100 ease-in-out duration-500'>
          <div className='text-lg bg-purple text-white hover:bg-soft-purple p-4 rounded-md drop-shadow-sm' id="web-skill-5">Graphic Design</div>
      </div>
      <div className='scale-95 hover:scale-100 ease-in-out duration-500'>
         <div className='text-lg bg-purple text-white hover:bg-soft-purple p-4 rounded-md drop-shadow-sm' id="web-skill-6">SEO</div>
      </div>
       </div>       
      </div>
        </div>

      <div className='bg-mauve mt-14 mb-12 pt-4 pb-12' id="personalskills-div">
      <div className='scale-95 hover:scale-100 ease-in-out duration-500'>
      <h2 className='container mx-auto text-center font-semibold text-3xl mt-6'>Top Projects</h2>
      <div className='container mx-auto rounded-lg text-center font-normal grid lg:grid-cols-3 sm:grid-cols-2 gap-4 px-4 my-4'>
      <div className='scale-95 hover:scale-100 ease-in-out duration-500'>
          <div className='text-lg bg-purple hover:bg-soft-purple text-white p-4 rounded-md' id="personal-skill-1">Gagromed.com</div>
      </div>
      <div className='scale-95 hover:scale-100 ease-in-out duration-500'>
          <div className='text-lg bg-purple hover:bg-soft-purple p-4 text-white rounded-md' id="personal-skill-2">Luxus-lounge.online</div>
      </div>
      <div className='scale-95 hover:scale-100 ease-in-out duration-500'>
          <div className='text-lg bg-purple hover:bg-soft-purple p-4 text-white rounded-md' id="personal-skill-3">Harmandev.me</div>
      </div>
      </div>
      </div>
      </div>
    </>
  )
}
