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
       <div id="aboutme-txt-div" className='container mx-auto p-10 text-white  text-justify text-xl rounded-lg drop-shadow-md'>
       We are a full-service digital marketing team that specializes in helping businesses in all shapes and sizes
       We can help with everything from social media management photography/videography, website design and development and mobile application to online marketing and SEO.
       We also offer high quality video and content production and email marketing services.
       </div>
       </div>
       </div>

       <div className='bg-white mt-14 pt-4 pb-12' id="webskills-div">
       <div className='scale-95 hover:scale-100 ease-in-out duration-500'>
      <h2 className='container mx-auto text-center font-semibold text-3xl mt-6'> What Lens Agency Provide?</h2>
      <div className='container mx-auto rounded-lg text-center font-normal grid lg:grid-cols-3 sm:grid-cols-2 gap-4 px-4 my-4 '>
      <div className='scale-95 hover:scale-100 ease-in-out duration-500'>
          <div className='text-xl bg-[#146994] text-white hover:bg-[#146994] p-4 rounded-md drop-shadow-sm' id="web-skill-1">Social Media Management</div>
          <div className='px-2 text-justify text-lg'>Enssuring the up to date of social media page, making sure that the page is doing well and developing a content sharing calendar.</div>
      </div>
      <div className='scale-95 hover:scale-100 ease-in-out duration-500'>
          <div className='text-xl bg-[#146994] text-white hover:bg-[#146994] p-4 rounded-md drop-shadow-sm' id="web-skill-2">Photography / Videography</div>
          <div className='px-2 text-justify text-lg'>Providing the creative photography and photo editing for local and international brands
               and Pre-production to the final cut, producing SM, TVC, Event Coverages for brands
          </div>
      </div>
      <div className='scale-95 hover:scale-100 ease-in-out duration-500'>
          <div className='text-xl bg-[#146994] text-white hover:bg-[#146994] p-4 rounded-md drop-shadow-sm' id="web-skill-3">Website Development</div>
          <div className='px-2 text-justify text-lg'>Every successful company needs a modern and stylish website, by collabrating with my team of developers we’re able to deliver the required website</div>
      </div>
      <div className='scale-95 hover:scale-100 ease-in-out duration-500'>
          <div className='text-xl bg-[#146994] text-white hover:bg-[#146994] p-4 rounded-md drop-shadow-sm' id="web-skill-4">Mobile Application Development</div>
          <div className='px-2 text-justify text-lg'>If in case your businesses needs beautiful mobile application for sure Lens Agency can make and Provide reliable and stylish mobile apps</div>
      </div>
      <div className='scale-95 hover:scale-100 ease-in-out duration-500'>
          <div className='text-xl bg-[#146994] text-white hover:bg-[#146994] p-4 rounded-md drop-shadow-sm' id="web-skill-5">
            Branding & Design
          </div>
          <div className='px-2 text-justify text-lg'>My team of creative directors are able to turn your product and introduce it to the world through amazing graphic visuals</div>
      </div>
      <div className='scale-95 hover:scale-100 ease-in-out duration-500'>
         <div className='text-xl bg-[#146994] text-white hover:bg-[#146994] p-4 rounded-md drop-shadow-sm' id="web-skill-6">Content Writing
      </div>
      <div className='px-2 text-justify text-lg'>Content writing and marketing plan as well as trainings for start-up marketing companies staffs</div>
      </div>
       </div>       
      </div>
        </div>
        <br></br>
        <br></br>
    </>
  )
}