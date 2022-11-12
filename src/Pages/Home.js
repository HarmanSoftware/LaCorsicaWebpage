import React from 'react'
import ReactCarousel from '../Components/ReactCarousel';


export default function Home() {
    return (
    <>
        <div className='grid grid-cols-1'>
        <div>
            <ReactCarousel/>
        </div>     
       </div>
       
       <div className='bg-[#146994] text-white mt-10 pt-4 pb-12' id="aboutme-div">
       <div className='scale-95 hover:scale-100 ease-in-out duration-500'>
       <h2 className='container mx-auto text-center font-semibold text-3xl mb-4 mt-4'>About Us</h2>
       <div id="aboutme-txt-div" className='container mx-auto p-10 bg-[#145994] text-white hover:bg-[#146994] rounded-lg drop-shadow-md'>
       We are a full-service digital marketing team that specializes in helping businesses in all shapes and sizes
       We can help with everything from social media management photography/videography, website design and development and mobile application to online marketing and SEO.
       We also offer high quality video and content production and email marketing services.
       </div>
       </div>
       </div>

       <div className='bg-white mt-14 pt-4 pb-12' id="webskills-div">
       <div className='scale-95 hover:scale-100 ease-in-out duration-500'>
      <h2 className='container mx-auto text-center font-semibold text-3xl mt-6'> What We Provide?</h2>
      <div className='container mx-auto rounded-lg text-center font-normal grid lg:grid-cols-3 sm:grid-cols-2 gap-4 px-4 my-4 '>
      <div className='scale-95 hover:scale-100 ease-in-out duration-500'>
          <div className='text-lg bg-[#146994] text-white hover:bg-[#146994] p-4 rounded-md drop-shadow-sm' id="web-skill-1">Social Media Management</div>
      </div>
      <div className='scale-95 hover:scale-100 ease-in-out duration-500'>
          <div className='text-lg bg-[#146994] text-white hover:bg-[#146994] p-4 rounded-md drop-shadow-sm' id="web-skill-2">Photography / Videography</div>
      </div>
      <div className='scale-95 hover:scale-100 ease-in-out duration-500'>
          <div className='text-lg bg-[#146994] text-white hover:bg-[#146994] p-4 rounded-md drop-shadow-sm' id="web-skill-3">Website Development</div>
      </div>
      <div className='scale-95 hover:scale-100 ease-in-out duration-500'>
          <div className='text-lg bg-[#146994] text-white hover:bg-[#146994] p-4 rounded-md drop-shadow-sm' id="web-skill-4">Mobile Application Development</div>
      </div>
      <div className='scale-95 hover:scale-100 ease-in-out duration-500'>
          <div className='text-lg bg-[#146994] text-white hover:bg-[#146994] p-4 rounded-md drop-shadow-sm' id="web-skill-5">Graphic Design</div>
      </div>
      <div className='scale-95 hover:scale-100 ease-in-out duration-500'>
         <div className='text-lg bg-[#146994] text-white hover:bg-[#146994] p-4 rounded-md drop-shadow-sm' id="web-skill-6">SEO</div>
      </div>
       </div>       
      </div>
        </div>
    </>
  )
}
